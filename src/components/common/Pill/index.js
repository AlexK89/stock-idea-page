import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import styles from "./Pill.module.scss";

const Pill = ({ text, icon, size, color }) => {
  const classes = className(styles.pill, styles[size], styles[color]);

  return (
    <div className={classes}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  size: PropTypes.oneOf(["small", "regular", "large"]),
  color: PropTypes.oneOf(["main", "danger", "success"]),
};

Pill.defaultProps = {
  size: "regular",
  color: "main",
};

export default Pill;
