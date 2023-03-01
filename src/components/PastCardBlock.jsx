import styles from "./pastGuests.module.css";
import start from "./icon/starts.svg";
import startWhile from "./icon/startsWhite.svg";

const PastCardBlock = () => {
  const arrCard = [
    {
      id: 1,
      img: start,
      title: "We had an amazing stay at the Guest House!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      avtor: "Nate Davidsson",
    },
    {
      id: 2,
      img: startWhile,
      title: "Beautiful little hideaway.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.",
      avtor: "Laura Paulie",
    },
  ];

  const res = arrCard.map((elem) => {
    return (
      <div className={styles.card} key={elem.id}>
        <img src={elem.img} alt="starts" />
        <h5 className={styles.titleCard}>{elem.title}</h5>
        <p className={styles.textCard}>{elem.text}</p>
        <div className={styles.lineAvtor}>
          <hr className={styles.lineCard} />
          <p className={styles.avtorCard}>{elem.avtor}</p>
        </div>
      </div>
    );
  });

  return <div className={styles.PastCardBlock}>{res}</div>;
};

export default PastCardBlock;
