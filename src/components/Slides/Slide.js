import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";
import styled from "styled-components";

const List = styled.li`
  outline: none;
  float: left;
  filter: brightness(50%);

  @media (min-width: 1200px) {
    margin: 0 10px;
    box-sizing: content-box;
  }
`;

const Slide = (props) => {
  return (
    <List style={props.style}>
      <SlideImage src={props.src} alt={props.alt} />
      {props.isShown && <SlideInfo title={props.title} desc={props.desc} />}
    </List>
  );
};

export default Slide;
