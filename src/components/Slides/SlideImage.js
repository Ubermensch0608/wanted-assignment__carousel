import classes from "./SlideImage.module.css";
import styled from "styled-components";

const Img = styled.img`
  margin-left: 0;
  margin-right: 0;
`;

const SlideImage = (props) => {
  return (
    <div className={classes["slide-image"]}>
      <a href="/">
        <Img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
};

export default SlideImage;
