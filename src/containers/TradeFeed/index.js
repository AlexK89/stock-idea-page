import React from "react";
import IdeaCard from "components/IdeaCard";
import styles from "./TradeFeed.module.scss";

const content = {
  title: {
    prefix: "Trade Feed",
    text: "Virtual Co-Invest in the best ideas (405)",
  },
};

const TradeFeed = () => {
  return (
    <div className={styles.tradeFeed}>
      <h2 className={styles.title}>
        <span>{content.title.prefix}</span> {content.title.text}
      </h2>
      <IdeaCard />
    </div>
  );
};

export default TradeFeed;
