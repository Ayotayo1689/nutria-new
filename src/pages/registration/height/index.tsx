import React, { FC, useState, useCallback } from "react";
import { RegistrationProps } from "../Registration.types";
import RegistrationLayout from "../RegistrationLayout";
import { defaultScrollValue } from "../age";
import Picker from "react-mobile-picker";
import { useProfile } from "contexts/profile-provider";
import axios from "axios";
import { baseUrl } from "pages/auth/sign-up";
import { enqueueSnackbar } from "notistack";

const Height: FC<RegistrationProps> = () => {
  const [heightValueGroup, setHeightValueGroup] = useState({});
  const { profileData, setProfileData } = useProfile();

  const optionGroups = {
    height: defaultScrollValue,
    unit: ["Fts"],
  };

  const handleChange = useCallback((name: string, value: string) => {
    setHeightValueGroup((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value,
    }));
    setProfileData((prevData) => ({
      ...prevData,
      height: value,
    }));
  }, []);

  // const handleChange = (name: string, value: string) => {
  //   setHeightValueGroup((prevValueGroups) => ({
  //     ...prevValueGroups,
  //     [name]: value,
  //   }));
  //   setProfileData((prevData) => ({
  //     ...prevData,
  //     height: value,
  //   }));
  // };

  return (
    <RegistrationLayout
      title="What is your height?"
      description="This is used to set up recommendations just for you"
    >
      <div className="scroll__picker-container">
        <Picker
          optionGroups={optionGroups}
          valueGroups={heightValueGroup}
          onChange={handleChange}
          itemHeight={44}
          height={375}
        />
      </div>
    </RegistrationLayout>
  );
};

export default Height;
