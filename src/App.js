import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideDB from "./store/slide-db";
import classes from "./App.module.css";

const App = () => {
  const slideData = SlideDB.map((data) => {
    return (
      <li key={data.id}>
        <Slide
          title={data.title}
          desc={data.desc}
          src={data.src}
          alt={data.alt}
        />
      </li>
    );
  });
  return (
    <div>
      <NavBar />
      <main className={classes.main}>
        <div className={classes.banner}>
          <div className={classes.list}>
            <div className={classes.track}>
              <ul className={classes.holder}>{slideData}</ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
