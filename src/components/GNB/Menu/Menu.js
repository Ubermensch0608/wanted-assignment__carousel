import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <a href="/">채용</a>
      </li>
      <li>
        <a href="/">이벤트</a>
      </li>
      <li>
        <a href="/">직군별 연봉</a>
      </li>
      <li>
        <a href="/">이력서</a>
      </li>
      <li>
        <a href="/">
          커뮤니티
          <em>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <g
                fill="none"
                fillRule="evenodd"
                fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                fontSize="9"
                fontWeight="500"
              >
                <g fill="#36F">
                  <text transform="translate(-934.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                    <tspan x="3" y="7">
                      New
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          </em>
        </a>
      </li>
      <li>
        <a href="/">프리랜서</a>
      </li>
      <li>
        <a href="/">
          AI 합격예측
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
            >
              <g
                fill="none"
                fillRule="evenodd"
                fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                fontSize="9"
                fontWeight="500"
              >
                <g fill="#36F">
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <text transform="translate(-932.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                <tspan x="1" y="7">
                                  Beta
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Menu;
