import styles from "./guestHouse.module.css";
import kitchenImg from "./icon/kitchen.png";

const GuestHouse = () => {
  return (
    <>
      <div className={styles.guestHouse}>
        <hr className={styles.line} />
        <h1 className={styles.title}>
          The Guest House is the perfect weekend getaway cabin.
        </h1>
      </div>
      <img src={kitchenImg} alt="kitchen" />
    </>
  );
};

export default GuestHouse;
