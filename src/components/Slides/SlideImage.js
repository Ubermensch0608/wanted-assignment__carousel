import classes from "./SlideImage.module.css";

const SlideImage = (props) => {
  return (
    <div className={classes["slide-image"]}>
      <a href="/">
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default SlideImage;
