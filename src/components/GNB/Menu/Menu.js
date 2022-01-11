import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>채용</li>
      <li>이벤트</li>
      <li>직군별 연봉</li>
      <li>이력서</li>
      <li>커뮤니티</li>
      <li>프리랜서</li>
      <li>AI 합격예측</li>
    </ul>
  );
};

export default Menu;
