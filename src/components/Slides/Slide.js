import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";
import styled from "styled-components";

const List = styled.li`
  outline: none;
  float: left;
  filter: brightness(50%);
  position: relative;

  @media (min-width: 1200px) {
    margin: 0 10px;
    box-sizing: content-box;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: 25px 10px;
    text-align: center;
    align-content: center;
  }
`;

const Slide = (props) => {
  const preventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <List style={props.style} onClick={preventHandler}>
      <SlideImage src={props.src} alt={props.alt} />
      {props.isShown && <SlideInfo title={props.title} desc={props.desc} />}
    </List>
  );
};

export default Slide;
