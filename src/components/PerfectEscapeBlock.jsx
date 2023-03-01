import styles from "./perfectEscape.module.css";
import perfectArrObject from "./perfectArrObject";

const PerfectEscapeBlock = () => {
  const res = perfectArrObject.map((elem) => {
    return (
      <div className={styles.blockList} key={elem.id}>
        <img className={styles.img} src={elem.img} alt="logo" />
        <div className={styles.titleText}>
          <p className={styles.subtitle}>{elem.title}</p>
          <p className={styles.text}>{elem.text}</p>
        </div>
      </div>
    );
  });
  return <div className={styles.blockPerfect}>{res}</div>;
};

export default PerfectEscapeBlock;
