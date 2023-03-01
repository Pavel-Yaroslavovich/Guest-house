import styles from "./sleeping.module.css";
import Furniture from "./Furniture";

const Sleeping = () => {
  return (
    <div className={styles.sleeping}>
      <div className={styles.container}>
        <hr className={styles.line} />
        <h3 className={styles.title}>Sleeping arrangements.</h3>
        <p className={styles.ipsum}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis
          consectetur.
        </p>
        <Furniture />
      </div>
    </div>
  );
};

export default Sleeping;
