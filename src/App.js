import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideData from "../src/assets/slide-data.json";
import Button from "./components/UI/Button";

import classes from "./App.module.css";
import styled from "styled-components";

const Main = styled.main`
  overflow: hidden;
  align-items: center;
  text-align: center;
  display: green;
  marigin: 0;
  padding: 0;
  background-color: #fff;

  position: relative;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;

const Banner = styled.div`
  margin: 0;
  padding: 0;
  display: inline-flex;

  @media (min-width: 1200px) {
    height: auto;
  }
  @media (max-width: 1024px) and (min-width: 768px) {
    height: 1000px;
  }
  @media (max-width: 767px) {
    height: 450px;
  }
`;

const SlideTrack = styled.div`
  width: 1240px;

  @media (max-width: 1024px) and (min-width: 768px) {
    display: inline-block;
    width: 1024px;

    /* justify-content: flex-start; */
  }
`;

const SlideHolder = styled.ul`
  margin: 0;
  padding: 0;
  width: 35800px;

  height: 300px;
  transform: translateX(0);
  transition-duration: 0.5s;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 33700px;

    /* justify-content: flex-start; */
  }
`;

const Padding = styled.div`
  height: 1px;
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(11);
  const [paused, setPaused] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const scrollRef = useRef(null);
  const slideRef = useRef(null);
  const dataRoot = SlideData.SlideInformation.slides;
  const TOTAL_SLIDES = dataRoot.length;

  const nextHandler = () => {
    if (currentSlide >= TOTAL_SLIDES - 11) {
      setCurrentSlide(11);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevHandler = () => {
    if (currentSlide === 11) {
      setCurrentSlide(TOTAL_SLIDES - 11);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const currentStyle = slideRef.current.style;
    currentStyle.transform = `translateX(-${currentSlide * 1080}px)`;

    const autoSlide = setInterval(() => {
      if (currentSlide >= TOTAL_SLIDES - 11) {
        setCurrentSlide(11);
      } else if (!paused) {
        setCurrentSlide(currentSlide + 1);
      }
    }, 4000);

    return () => {
      if (autoSlide) {
        clearInterval(autoSlide);
      }
    };
  }, [currentSlide, paused, TOTAL_SLIDES, isDrag, startX]);

  const swipeHanlder = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(currentSlide + 1),
    onSwipedRight: () => setCurrentSlide(currentSlide - 1),
  });

  const onDragStart = (event) => {
    event.preventDefault();
    setIsDrag(true);
    setStartX(event.pageX + scrollRef.current.scrollLeft);
  };

  const onDragMove = (event) => {
    if (isDrag) {
      console.log(startX, event.pageX);
      scrollRef.current.scrollLeft = startX - event.pageX;
    }
  };

  const onDragEnd = (event) => {
    if (isDrag) {
      if (startX > event.pageX) {
        if (currentSlide >= TOTAL_SLIDES - 11) {
          setCurrentSlide(11);
        } else {
          setCurrentSlide((prev) => prev + 1);
        }
      } else {
        if (currentSlide === 11) {
          setCurrentSlide(TOTAL_SLIDES - 11);
        } else {
          setCurrentSlide((prev) => prev - 1);
        }
      }
    }

    setIsDrag(false);
    scrollRef.current.scrollLeft = currentSlide;
  };

  const slideData = dataRoot.map((data) => {
    return (
      <Slide
        key={data.id}
        title={data.title}
        desc={data.desc}
        src={data.src}
        alt={data.alt}
        isShown={currentSlide - 1 === data.index ? true : false}
        style={{
          width: data.width,
          clip: data.clip,
        }}
      />
    );
  });

  const firstSlide = Object.values(slideData[0]);
  const currentSlideStyle = Object.values(slideData[currentSlide]);
  firstSlide[4]["style"]["marginLeft"] = `0`;
  firstSlide[4]["style"]["paddingLeft"] = `0`;
  currentSlideStyle[4]["style"]["filter"] = `brightness(100%)`;

  return (
    <React.Fragment>
      <NavBar />
      <Padding />
      <Main ref={scrollRef}>
        <Banner>
          <SlideTrack
            {...swipeHanlder}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
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
