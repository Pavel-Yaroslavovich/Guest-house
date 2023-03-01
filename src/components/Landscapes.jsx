import styles from "./landscapes.module.css";
import logo from "./icon/shape.svg";
import frame from "./icon/frame.svg";
import LandscapesText from "./LandscapesText";

const Landscapes = () => {
  return (
    <>
      <div className={styles.imgFon}>
        <div className={styles.textBlock}>
          <img src={logo} alt="guest house" />
          <h3 className={styles.title}>
            Experience the perfect combination of modern housing & natural
            scenery.
          </h3>
          <p className={styles.subtitle}>Located in Lofoten, norway</p>
          <img src={frame} alt="frame" />
        </div>
      </div>
      <LandscapesText />
    </>
  );
};

export default Landscapes;
