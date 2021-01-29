import React from "react";
import Button from "components/common/Button";
import arrowIcon from "Icons/arrow.png";
import tickIcon from "Icons/tick.png";
import styles from "./IdeaSubmit.module.scss";

const text = {
  title: "Submit your stock idea in three simple steps",
  options: [
    "Select your stock",
    "Write your analysis",
    "Allocate virtual dollars to your idea",
  ],
  btnText: "Submit a stock idea",
};

const IdeaSubmit = () => {
  return (
    <div className={styles.ideaSubmit}>
      <h2>{text.title}</h2>
      <div className={styles.details}>
        <ul>
          {text.options.map((option) => (
            <li key={option}>
              <img src={tickIcon} alt="tick icon" />
              {option}
            </li>
          ))}
        </ul>
        <div className={styles.btnWrapper}>
          <Button
            text={text.btnText}
            size="large"
            icon={<img src={arrowIcon} alt="arrow icon" size={"large"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmit;
