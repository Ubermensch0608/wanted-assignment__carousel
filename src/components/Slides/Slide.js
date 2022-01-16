import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";
import classes from "./Slide.module.css";

const Slide = (props) => {
  return (
    <li className={classes.slide}>
      <div>
        <SlideImage src={props.src} alt={props.alt} />
      </div>
      <SlideInfo title={props.title} desc={props.desc} />
    </li>
  );
};

export default Slide;
