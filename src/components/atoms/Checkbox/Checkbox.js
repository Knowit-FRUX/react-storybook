import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.css";

const Checkbox = ({ defaultChecked, disabled, id, label }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label
      className={`${styles.label} ${disabled ? styles.disabled : ""}`}
      htmlFor={id}
    >
      <input
        checked={checked}
        className={styles.input}
        disabled={disabled}
        id={id}
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  label: "",
};
