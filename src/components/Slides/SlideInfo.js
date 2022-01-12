import classes from "./SlideInfo.module.css";

const SlideInfo = (props) => {
  return (
    <div className={classes.card}>
      <h2>해, 커리어 EP 02 공개</h2>
      <h3>최종 발표를 위한 마지막 관문 2라운드의 승자는?</h3>
      <hr />
      <button>
        <span>바로가기</span>
        <span>
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SlideInfo;
