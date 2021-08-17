import PropTypes from "prop-types";
import Checkbox from "../../atoms/Checkbox";
import "./checkboxes.css";

const Checkboxes = ({ label, data }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {data.map(({ defaultChecked, disabled, id, label }) => (
        <Checkbox
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          label={label}
        />
      ))}
    </fieldset>
  );
};

export default Checkboxes;

Checkboxes.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      defaultChecked: PropTypes.bool,
      disabled: PropTypes.bool,
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
};
