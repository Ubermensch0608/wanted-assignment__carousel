import classes from "./Aside.module.css";
import BellSvg from "./svg/bell-svg";
import SearchSvg from "./svg/search-svg";
import profileDefault from "./profile_default.png";

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <ul>
        <li>
          <button>
            <SearchSvg />
          </button>
        </li>
        <li>
          <button>
            <BellSvg />
          </button>
        </li>
        <li className={classes["profile-box"]}>
          <button>
            <div className={classes.border}>
              <div
                className={classes.avatar}
                src={profileDefault}
                alt="profile-default"
              ></div>
            </div>
          </button>
        </li>
        <li className={classes.division}>
          <a href="/" className={classes["dashboard-btn"]}>
            기업 서비스
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
