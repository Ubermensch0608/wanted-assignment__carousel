import NavBar from "./components/GNB/NavBar";
import Slide from "./components/Slides/Slide";
import SlideDB from "./store/slide-db";
import classes from "./App.module.css";
import Button from "./components/UI/Button";

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
          <div className={classes.slider}>
            <div className={classes.list}>
              <div className={classes.track}>
                <ul className={classes.holder}>{slideData}</ul>
              </div>
            </div>
          </div>
          <Button
            className={classes.next}
            pathD="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
          />
          <Button
            className={classes.prev}
            pathD="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
