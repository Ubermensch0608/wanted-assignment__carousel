import burger_img from "../../../images/icon-menu.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <div>
        <button>
          <img src={burger_img} alt="burger_img" />
        </button>
        <a href="/" className={classes.main}>
          <i className={classes.new}></i>
        </a>
      </div>
    </div>
  );
};

export default Logo;
