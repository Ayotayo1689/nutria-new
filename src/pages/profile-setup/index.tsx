import ScrollSelector from "components/scroll-selector";
import ProfileProvider from "contexts/profile-provider";
import Age from "pages/registration/age";
import React, { FC } from "react";

const ProfileSetupPages: FC = () => {
  const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

  const arrayOfValues = Array.from(
    { length: 100 },
    (_, index) => `${index + 1}`
  );

  const handleItemSelect = (selectedItem: string) => {
  };

  return (
    <ProfileProvider>
      <div>Registration</div>
      <ScrollSelector items={arrayOfValues} onSelect={handleItemSelect} />
    </ProfileProvider>
  );
};

export default ProfileSetupPages;
