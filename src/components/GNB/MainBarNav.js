import Logo from "./NavTop/Logo";
import Menu from "./Menu/Menu";
import Aside from "./Aside/Aside";

import classes from "./MainBarNav.module.css";

const MainBarNav = (props) => {
  return (
    <nav className={classes["main-bar-nav"]}>
      <Logo />
      <Menu />
      <Aside />
    </nav>
  );
};

export default MainBarNav;
