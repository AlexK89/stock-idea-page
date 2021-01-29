import React from "react";
import IdeaSubmit from "components/IdeaSubmit";
import IdeaInspiration from "components/IdeaInspiration";

import styles from "./TradeIdeas.module.scss";

const TradeIdeas = () => {
  return (
    <div className={styles.tradeIdeas}>
      <IdeaSubmit />
      <IdeaInspiration />
    </div>
  );
};

export default TradeIdeas;
