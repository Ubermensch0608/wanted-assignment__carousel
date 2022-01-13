import MainBar from "./MainBar";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={classes["nav-bar"]}>
      <MainBar />
    </div>
  );
};

export default NavBar;
