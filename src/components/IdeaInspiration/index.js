import React from "react";
import Button from "components/common/Button";
import arrowIcon from "Icons/arrow.png";
import styles from "./IdeaInspiration.module.scss";

const text = {
  title: "Need some Inspirations of Stock ideas?",
  btnText: "Submit a stock idea",
};

const IdeaInspiration = () => {
  return (
    <div className={styles.ideaInspiration}>
      <h2>{text.title}</h2>
      <div className={styles.btnWrapper}>
        <Button
          text={text.btnText}
          size="large"
          icon={<img src={arrowIcon} alt="arrow icon" size={"large"} />}
        />
      </div>
    </div>
  );
};

export default IdeaInspiration;
