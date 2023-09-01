import React, { FC, useState } from "react";
import location from "../../assets/svg/pana.svg";
import Button from "../../components/ui/button";
import { ILocationProps } from "./Location.types";
import "./Location.styles.scss";
import { number } from "yargs";
import { pageRoutes } from "routes/index.routes";
import { Navigate } from "react-router";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Registration from "pages/registration/Index";

type geolocation = {
  latitude: null;
  longitude: null;
};

const Location: FC<ILocationProps> = (props) => {
  const [userLocation, setUserLocation] = useState<geolocation>();
  const navigate = useNavigate();

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      navigate(pageRoutes.registration);
    }
  }

  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setUserLocation({ latitude, longitude });
  }

  function error() {}

  return (
    <div className='location app-container'>
      <div className='location__content app-container__content'>
        <div className='location__content__image'>
          <img src={location} alt='address' />
        </div>
        <p className='location__content__heading'>Allow location</p>
        <p className='location__content__address'>
          This allows us find stores and restruants close to you
        </p>
        <div className='location__content__button'>
          <Button
            children='Cancel'
            variant='secondary'
            className='location-btn'
            // onClick={() => handleNavigate('/registration')}
          />
          <Button
            children="Cancel"
            variant="secondary"
            className="location-btn"
            onClick={() => {
              navigate(pageRoutes.registration);
            }}
          />
          <Button
            children="Allow"
            variant="primary"
            className="location-btn"
            onClick={handleLocationClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Location
