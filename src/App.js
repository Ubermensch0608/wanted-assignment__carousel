import React, { useEffect, useRef, useState } from "react";

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
  width: 13070px;
  height: 300px;
  transform: translateX(0px);
  transition-duration: 0.5s;
  display: flex;
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStop, setIsStop] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [touchPosition, setTouchPosition] = useState({ x: "", y: "" });
  const slideRef = useRef(null);
  const dataRoot = SlideData.SlideInformation.slides;
  const TOTAL_SLIDES = dataRoot.length;

  useEffect(() => {
    const currentStyle = slideRef.current.style;
    currentStyle.transform = `translateX(-${currentSlide * 1050}px)`;

    if (currentSlide >= TOTAL_SLIDES - 3) {
      setCurrentSlide(0);
    }

    const autoSlide = setInterval(() => {
      if (!isStop) {
        setCurrentSlide(currentSlide + 1);
      }
    }, 4000);

    return () => {
      if (autoSlide) {
        console.log("stop");
        clearInterval(autoSlide);
      }
    };
  }, [currentSlide, isStop]);

  console.log(TOTAL_SLIDES);
  const nextHandler = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevHandler = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 3);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // const startTouchHandler = (event) => {
  //   setTouchPosition({
  //     x: event.changedTouches[0].pageX,
  //     y: event.changedTouches[0].pageY,
  //   });
  // };

  // const endTouchHandler = (event) => {
  //   const distanceX = Math.abs(touchPosition.x - event.changedTouches[0].pageX);
  //   const distanceY = Math.abs(touchPosition.y - event.changedTouches[0].pageY);

  //   if (distanceY + distanceX > 30 && distanceX > distanceY) {
  //     setTouchPosition(touchPosition.x + window.innerWidth);
  //   }
  // };
  // console.log(touchPosition);

  const slideData = dataRoot.map((data) => {
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

  const onEnter = () => {
    setIsStop(true);
  };
  const onLeave = () => {
    setIsStop(false);
  };

  const onDragStart = (event) => {
    event.preventDefault();
    setIsDrag(true);
    setStartX(event.pageX + slideRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (event) => {
    if (isDrag) {
      const { scrollWidth, userWidth, scrollLeft } = slideRef.current;

      slideRef.current.scrollLeft = startX - event.pageX;

      if (scrollLeft === 0) {
        setStartX(event.pageX);
      } else if (scrollWidth <= userWidth + scrollWidth) {
        setStartX(event.pageX + scrollLeft);
      }
    }
  };

  const firstSlide = Object.values(slideData[0]);
  const lasetSlide = Object.values(slideData[13]);
  firstSlide[4]["style"]["width"] = `32vh`;
  firstSlide[4]["style"]["marginLeft"] = `0`;
  firstSlide[4]["style"]["paddingLeft"] = `0`;
  lasetSlide[4]["style"]["width"] = `32vh`;

  return (
    <React.Fragment>
      <NavBar />
      <Main>
        <Banner>
          {/* SlideTrack은 Container */}
          <SlideTrack>
            {currentSlide}
            {/* ContentHolder는 SliderContainer */}
            <SlideHolder
              ref={slideRef}
              onMouseDown={onDragStart}
              onMouseMove={onDragMove}
              onMouseUp={onDragEnd}
              onMouseLeave={() => {
                this.onLeave();
                this.onDragEnd();
              }}
              onMouseEnter={onEnter}
              // onTouchStart={startTouchHandler}
              // onTouchEnd={endTouchHandler}
            >
              {slideData}
            </SlideHolder>
          </SlideTrack>
          <Button
            className={classes.next}
            onClick={nextHandler}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            pathD="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
          />
          <Button
            className={classes.prev}
            onClick={prevHandler}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            pathD="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
          />
        </Banner>
      </Main>
    </React.Fragment>
  );
};

export default App;
