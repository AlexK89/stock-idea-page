import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ text, icon, onClick, size, color }) => {
  const classes = className(styles.btn, styles[size], styles[color]);

  return (
    <button className={classes} onClick={onClick}>
      <span>{text}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "regular", "large"]),
  color: PropTypes.oneOf(["main", "danger", "success", "primary"]),
};

Button.defaultProps = {
  size: "regular",
  color: "main",
};

export default Button;
