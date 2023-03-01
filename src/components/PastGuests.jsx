import styles from "./pastGuests.module.css";
import PastCardBlock from "./PastCardBlock";
import tableImg from "./icon/table.png";

const PastGuests = () => {
  return (
    <>
      <div className={styles.pastGuests}>
        <div className={styles.pastContainer}>
          <hr className={styles.line} />
          <h2 className={styles.title}>Past guests.</h2>
          <p className={styles.subtitle}>
            Don't take our word for it! Have a look at what our previous guests
            say about their stay at the Guest House.
          </p>
          <PastCardBlock />
        </div>
      </div>
      <img src={tableImg} alt="table" />
    </>
  );
};

export default PastGuests;
