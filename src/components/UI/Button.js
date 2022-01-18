import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.arrow} ${props.className}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <span>
        <svg viewBox="0 0 18 18">
          <path d={props.pathD}></path>
        </svg>
      </span>
    </button>
  );
};

export default Button;
