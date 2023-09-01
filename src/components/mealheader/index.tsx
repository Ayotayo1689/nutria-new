import React, { FC } from "react";
import { IMealHeaderProps } from "./MealHeader.type";
import backarrow from "./../../assets/svg/backarrow.svg";
import notificationIcon from "./../../assets/svg/notification-icon.svg";
import "./MealHeader.style.scss";

const MealHeader: FC<IMealHeaderProps> = (props) => {
  const { link, title } = props;
  return (
    <div className="meal-header">
      <div className="meal-header__content">
        <div className="meal-header__content__description">
          <div className="meal-header__content__description__type">
            <a href={link}>
              <img src={backarrow} alt="icon" />
            </a>
            <p className="content-title">{title}</p>
          </div>
          <div className="content-notification">
            <img src={notificationIcon} alt="icon" />
          </div>
        </div>
        <p className="content-recommendation">Recommendations</p>
      </div>
    </div>
  );
};

export default MealHeader;
