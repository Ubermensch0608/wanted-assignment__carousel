import MainBarNav from "./MainBarNav";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes["nav-bar"]}>
      <div className={classes["main-bar"]}>
        <MainBarNav />
      </div>
    </div>
  );
};

export default NavBar;
