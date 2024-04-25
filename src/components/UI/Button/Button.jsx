import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ title, styles, onClick, value,children, className }) => {
  return (
    <button className={`${css.button} ${css[className]}`} value={value} onClick={onClick}>
      {title}{children}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
