import React from "react";
import PropTypes from "prop-types";
import IdeaStockCard from "./StockCard";
import IdeaStats from "./IdeaStats";
import IdeaSummary from "./IdeaSummary";
import Button from "components/common/Button";
import IdeaCardStatus from "./IdeaCardStatus";
import styles from "./IdeaCard.module.scss";

const content = {
  tradeStatus: "Live trade",
  idea: {
    status: "Idea submitted",
    date: "10.10.10",
  },
  btnText: "Co-invest in this idea",
};

const IdeaCard = (props) => {
  return (
    <div className={styles.ideaCard}>
      <IdeaStockCard />
      <IdeaStats />
      <IdeaSummary />
      <footer>
        <p className={styles.ideaStatus}>
          {content.idea.status}
          <span>{content.idea.date}</span>
        </p>
        <Button text={content.btnText} color={"primary"} />
        <div className={styles.tradeStatus}>
          <IdeaCardStatus text={content.tradeStatus} />
        </div>
      </footer>
    </div>
  );
};

IdeaCard.propTypes = {};

export default IdeaCard;
