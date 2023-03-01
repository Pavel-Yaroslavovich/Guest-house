import styles from "./places.module.css";

const Places = () => {
  return (
    <div className={styles.places}>
      <div className={styles.container}>
        <hr className={styles.line} />
        <h2 className={styles.title}>
          We're already booked up for the spring — hurry up & secure your stay
          for the summer.
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque aliquam odio et faucibus.
        </p>
        <a className={styles.contact} href="!#">
          Contact
        </a>
        <a className={styles.bookNow} href="!#">
          Book now
        </a>
      </div>
    </div>
  );
};

export default Places;
