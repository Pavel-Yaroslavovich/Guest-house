import styles from "./comeTogether.module.css";
import ComeEnumeration from "./ComeEnumeration";

const ComeTogether = () => {
  return (
    <div className={styles.comeTogether}>
      <div className={styles.container}>
        <div className={styles.titleText}>
          <hr className={styles.line} />
          <h3 className={styles.title}>Come together.</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus.
          </p>
        </div>
        <ComeEnumeration />
      </div>
    </div>
  );
};

export default ComeTogether;
