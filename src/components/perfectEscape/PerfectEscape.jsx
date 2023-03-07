import styles from "./perfectEscape.module.css";
import PerfectEscapeBlock from "./PerfectEscapeBlock";

const PerfectEscape = () => {
  return (
    <div className={styles.perfectEscape}>
      <hr className={styles.line} />
      <h3 className={styles.title}>The perfect escape.</h3>
      <p className={styles.loremIpsum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
        consectetur.
      </p>
      <PerfectEscapeBlock />
    </div>
  );
};

export default PerfectEscape;
