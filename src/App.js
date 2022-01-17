import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideData from "./store/slide-data.json";
import classes from "./App.module.css";
import Button from "./components/UI/Button";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: #fff;
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;

const Banner = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SlideTrack = styled.div`
  width: 300vh;
  overflow: hidden;
`;

const SlideHolder = styled.ul`
  margin: 0;
  padding: 0;
  width: 12015px;
  height: 300px;
  transform: translateX(0px);
  transition-duration: 0.6s;
  display: flex;
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const slideRef = useRef(null);
  const dataRoot = SlideData.SlideInformation.slides;
  const TOTAL_SLIDES = dataRoot.length;

  useEffect(() => {
    const currentStyle = slideRef.current.style;
    currentStyle.transform = `translateX(-${currentSlide * 1050}px)`;

    if (currentSlide === 0) {
      setIsShown(true);
    }

    if (currentSlide === TOTAL_SLIDES) {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  const nextHandler = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slideData.length - 3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slideData = dataRoot.map((data) => {
    console.log(data.index);
    console.log(currentSlide);
    return (
      <Slide
        key={data.id}
        title={data.title}
        desc={data.desc}
        src={data.src}
        alt={data.alt}
        style={{ width: data.width }}
        isShown={currentSlide === data.index ? true : false}
      />
    );
  });

  console.log(Object.values(slideData[0]));
  const firstSlide = Object.values(slideData[0]);
  const lasetSlide = Object.values(slideData[12]);
  firstSlide[4]["style"]["width"] = `230px`;
  lasetSlide[4]["style"]["width"] = `230px`;
  return (
    <React.Fragment>
      <NavBar />
      <Main>
        <Banner>
          {/* SlideTrack은 Container */}
          <SlideTrack>
            {currentSlide}
            {/* ContentHolder는 SliderContainer */}
            <SlideHolder ref={slideRef}>{slideData}</SlideHolder>
          </SlideTrack>
          <Button
            onClick={nextHandler}
            className={classes.next}
            pathD="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
          />
          <Button
            onClick={prevHandler}
            className={classes.prev}
            pathD="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
          />
        </Banner>
      </Main>
    </React.Fragment>
  );
};

export default App;
