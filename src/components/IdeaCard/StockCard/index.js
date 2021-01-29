import React from "react";
import PropTypes from "prop-types";
import Pill from "components/common/Pill";
import Tag from "components/common/Tag";
import ArrowUp from "Icons/up-arrow.png";

import styles from "./StockCard.module.scss";

const content = {
  stockName: "Delta Plus Group",
  stockCode: "DLTA.PA",
  positionType: "Long position",
  tags: ["australia", "materials"],
  stockStats: [
    { type: "Current Price", value: "13.98", unit: "M" },
    { type: "Target Price", value: "13.98", unit: "M" },
    { type: "Market Cap", value: "10.75", unit: "B" },
  ],
  forecast: [
    { type: "Expected Returns", value: "20.84%" },
    { type: "Inception Price", value: "$1.20" },
    { type: "Expected Returns", value: "$20.84" },
  ],
};

const StockCard = () => {
  return (
    <section className={styles.stockCard}>
      <header>
        <div className={styles.stockDetails}>
          <h2>{content.stockName}</h2>
          <p>{content.stockCode}</p>
        </div>
        <div className={styles.pillWrapper}>
          <Pill
            text={content.positionType}
            icon={<img src={ArrowUp} alt="arrow up icon" />}
            size={"large"}
            color={"success"}
          />
        </div>
      </header>
      <div className={styles.stockBody}>
        <div className={styles.stats}>
          <ul className={styles.tags}>
            {content.tags.map((tag) => (
              <li key={tag}>
                <Tag text={tag} />
              </li>
            ))}
          </ul>
          <ul className={styles.stockStats}>
            {content.stockStats.map(({ type, value, unit }) => (
              <li key={type}>
                <span className={styles.type}>{type}</span>
                <span className={styles.value}>
                  {value}
                  {unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.forecast}>
          {content.forecast.map(({ type, value }) => (
            <li key={type}>
              <span className={styles.type}>{type}</span>
              <span className={styles.value}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

StockCard.propTypes = {};

export default StockCard;
