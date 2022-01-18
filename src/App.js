import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideData from "./store/slide-data.json";
import Button from "./components/UI/Button";

import classes from "./App.module.css";
import styled from "styled-components";

const Main = styled.main`
  marigin: 0;
  padding: 0;
  background-color: #fff;
  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;

const Banner = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    height: auto;
  }
`;

const SlideTrack = styled.div`
  width: 300vh;
  overflow: hidden;
`;

const SlideHolder = styled.ul`
  margin: 0;
  padding: 0;
  width: 13070px;
  height: 300px;
  transform: translateX(0px);
  transition-duration: 0.5s;
  display: flex;
`;

const Padding = styled.div`
  height: 1px;
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideRef = useRef(null);
  const dataRoot = SlideData.SlideInformation.slides;
  const TOTAL_SLIDES = dataRoot.length;

  const nextHandler = () => {
    if (currentSlide >= 10) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const currentStyle = slideRef.current.style;
    currentStyle.transform = `translateX(-${currentSlide * 1050}px)`;

    const autoSlide = setInterval(() => {
      if (currentSlide >= TOTAL_SLIDES - 3) {
        setCurrentSlide(0);
      } else if (!paused) {
        setCurrentSlide(currentSlide + 1);
      }
    }, 4000);

    return () => {
      if (autoSlide) {
        clearInterval(autoSlide);
      }
    };
  }, [currentSlide, paused]);

  const swipeHanlder = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(currentSlide + 1),
    onSwipedRight: () => setCurrentSlide(currentSlide - 1),
  });

  const slideData = dataRoot.map((data) => {
    return (
      <Slide
        key={data.id}
        title={data.title}
        desc={data.desc}
        src={data.src}
        alt={data.alt}
        isShown={currentSlide === data.index ? true : false}
        style={{
          width: data.width,
        }}
      />
    );
  });

  const firstSlide = Object.values(slideData[0]);
  const lasetSlide = Object.values(slideData[13]);
  const currentSlideStyle = Object.values(slideData[currentSlide + 1]);
  firstSlide[4]["style"]["width"] = `32vh`;
  firstSlide[4]["style"]["marginLeft"] = `0`;
  firstSlide[4]["style"]["paddingLeft"] = `0`;
  lasetSlide[4]["style"]["width"] = `32vh`;
  currentSlideStyle[4]["style"]["filter"] = `brightness(100%)`;

  return (
    <React.Fragment>
      <NavBar />
      <Padding />
      <Main>
        <Banner>
          <SlideTrack {...swipeHanlder}>
            <SlideHolder
              ref={slideRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {slideData}
            </SlideHolder>
          </SlideTrack>
          <Button
            className={classes.next}
            onClick={nextHandler}
            pathD="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
          />
          <Button
            className={classes.prev}
            onClick={prevHandler}
            pathD="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
          />
        </Banner>
      </Main>
    </React.Fragment>
  );
};

export default App;
