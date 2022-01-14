import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";
import classes from "./Slide.module.css";

const Slide = (props) => {
  return (
    <div className={classes.slide}>
      <div>
        <SlideImage src={props.src} alt={props.alt} />
      </div>
      <SlideInfo
        className={classes.hidden}
        title={props.title}
        desc={props.desc}
      />
    </div>
  );
};

export default Slide;
