import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import styles from "./IdeaCardStatus.module.scss";

const IdeaCardStatus = ({ status, text }) => {
  const classes = className(styles.ideaCardStatus, styles[status]);

  return <p className={classes}>{text}</p>;
};

IdeaCardStatus.propTypes = {
  status: PropTypes.oneOf(["alert", "active"]),
  text: PropTypes.string,
};

IdeaCardStatus.defaultProps = {
  status: "active",
};

export default IdeaCardStatus;
