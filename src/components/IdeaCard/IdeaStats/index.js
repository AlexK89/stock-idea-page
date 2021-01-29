import React from "react";
import styles from "./IdeaStats.module.scss";

import Pill from "components/common/Pill";

const content = [
  {
    title: "Attachments",
    value: "Not specified",
  },
  {
    title: "Time frame",
    value: "6 months to 1 year",
  },
  {
    title: "Conviction level",
    value: <Pill text="high" size="small" color="success" />,
  },
  {
    title: "Catalyst",
    value: "Not specified",
  },
];

const IdeaStats = (props) => {
  return (
    <ul className={styles.ideaStats}>
      {content.map((item) => {
        return (
          <li key={item.title}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

IdeaStats.propTypes = {};

export default IdeaStats;
