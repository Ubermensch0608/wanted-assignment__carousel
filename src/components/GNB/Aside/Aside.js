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
        <li>
          <button>
            <div>
              <img
                className={classes["profile-default"]}
                src={profileDefault}
                alt="profile-default"
              />
            </div>
          </button>
        </li>
        <li className={classes.division}>
          <button className={classes["dashboard-btn"]}>기업 서비스</button>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
