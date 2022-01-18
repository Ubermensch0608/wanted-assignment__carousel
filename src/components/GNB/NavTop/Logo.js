import burger_img from "../../../images/icon-menu.png";
import wanted_logo from "../../../images/wanted_logo.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <div>
        <button>
          <img src={burger_img} alt="burger_img" />
        </button>
        <a href="/" className={classes.main}>
          <img src={wanted_logo} alt="wanted_logo"></img>
        </a>
      </div>
    </div>
  );
};

export default Logo;
