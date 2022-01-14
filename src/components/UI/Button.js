import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.arrow} ${props.className}`}
      onClick={props.onClick}
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
