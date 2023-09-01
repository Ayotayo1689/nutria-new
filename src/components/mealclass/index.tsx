import React from "react";
import { recommendations } from "./constants";
import heart from "./../../assets/svg/heart.svg";
import "./MealClass.style.scss";

const MealClass = () => {
  const midpoint = Math.ceil(recommendations.length / 2);
  const recommendationOne = recommendations.slice(0, midpoint);
  const recommendationTwo = recommendations.slice(midpoint);
  return (
    <div className="meal-class">
      <div className="meal-class__content">
        <div className="meal-class__content__recommendation">
          {recommendationOne.map((option, i) => (
            <div className="meal-class__content__recommendation__meal" key={i}>
              <div className="meal-class__content__recommendation__meal__image">
                <img src={option.img} alt="image" />
              </div>
              <img src={heart} alt="icon" className="meal-image" />
              <div className="meal-class__content__recommendation__title">
                <p className="option-title">{option.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="meal-class__content__recommendation">
          {recommendationTwo.map((option, i) => (
            <div className="meal-class__content__recommendation__meal" key={i}>
              <div className="meal-class__content__recommendation__meal__image">
                <img src={option.img} alt="image" />
              </div>
              <img src={heart} alt="icon" className="meal-image" />
              <div className="meal-class__content__recommendation__title">
                <p className="option-title">{option.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealClass;
