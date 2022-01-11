import Menu from "./Menu/Menu";
import Logo from "./NavTop/Logo";
import classes from "./MainBarNav.module.css";

const MainBarNav = (props) => {
  return (
    <nav className={classes["main-bar-nav"]}>
      <Logo />
      <Menu />
    </nav>
  );
};

export default MainBarNav;
