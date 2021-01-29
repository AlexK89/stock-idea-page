import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";

const Tag = ({ text, icon, size, color }) => {
  const classes = className(styles.tag, styles[size], styles[color]);

  return (
    <div className={classes}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  size: PropTypes.oneOf(["small", "regular", "large"]),
  color: PropTypes.oneOf(["main", "danger", "success"]),
};

Tag.defaultProps = {
  size: "regular",
  color: "main",
};

export default Tag;
