import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideData from "./store/slide-data.json";
import classes from "./App.module.css";
import Button from "./components/UI/Button";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const slideWidth = 925;
const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const dataRoot = SlideData.SlideInformation.slides;
  const TOTAL_SLIDES = dataRoot.length;

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
  }, [currentSlide, slideRef]);

  const nextHandler = () => {
    if (currentSlide > TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);

      console.log(slideRef.current.style.transform);
      console.log(currentSlide);
    }
  };

  const prevHandler = () => {
    if (currentSlide === 1) {
      setCurrentSlide(11);
    } else {
      setCurrentSlide((prevSlide) => prevSlide - 1);
      console.log(currentSlide);
    }
  };
  const slideData = dataRoot.map((data) => {
    return (
      <Slide
        key={data.id}
        title={data.title}
        desc={data.desc}
        src={data.src}
        alt={data.alt}
      />
    );
  });

  return (
    <React.Fragment>
      <NavBar />
      <Main>
        <Banner>
          {/* SlideTrack은 Container */}
          <SlideTrack>
            {currentSlide}
            {/* ContentHolder는 SliderContainer */}
            <ContentHolder ref={slideRef}>{slideData}</ContentHolder>
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

const Main = styled.main`
  background-color: #fff;
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;
const Banner = styled.div`
  width: auto;
  height: 500px;
`;

const SlideTrack = styled.div`
  width: 1520px;
  height: 310px;
`;

const ContentHolder = styled.ul`
  opacity: 1;
  width: 25440px;
  height: 300px;
  position: relative;
  left: 0;
  top: 0;
  margin: auto;
  padding: 0;
  transform: translateX(-${slideWidth}px);
  transition-duration: 0.6s;

  @media (min-width: 1200px) {
    transform: translateX(-${slideWidth}px);
  }
`;

export default App;
