import styles from "./landscapesText.module.css";

const LandscapesText = () => {
  return (
    <div className={styles.containerText}>
      <div className={styles.block}>
        <hr className={styles.line} />
        <p className={styles.textHouse}>
          The Guest House is the perfect weekend get-away housing. Located in
          the Norwegian archipelago, Lofoten, it's a great escape from the
          hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla
          rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum
          dapibus congue et, vulputate ut ligula.
        </p>
        <div>
          <p className={styles.textInformation}>
            Below you'll find information about the accommodation and what's
            included in the price. Don't hesitate to reach out to us vi the
            contact page if you have any questions around your stay.
          </p>
          <button className={styles.btn}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandscapesText;
