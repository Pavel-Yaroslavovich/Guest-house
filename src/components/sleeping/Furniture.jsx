import styles from "./sleeping.module.css";
import bedsImg from "../icon/beds.svg";
import bedroomsImg from "../icon/bedrooms.svg";
import bathroomsImg from "../icon/bathrooms.svg";

const Furniture = () => {
  const furniture = [
    {
      id: 1,
      img: bedsImg,
      name: "Beds",
      text: "The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.",
    },
    {
      id: 2,
      img: bedroomsImg,
      name: "Bedrooms",
      text: "Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.",
    },
    {
      id: 3,
      img: bathroomsImg,
      name: "Bathrooms",
      text: "The cabin has three bathrooms, all equipped with showers and one with a bath tub,",
    },
  ];

  const result = furniture.map((elem) => {
    return (
      <div key={elem.id} className={styles.sleepingBlock}>
        <img src={elem.img} alt="furniture" />
        <h5 className={styles.subtitle}>{elem.name}</h5>
        <p className={styles.text}>{elem.text}</p>
      </div>
    );
  });

  return <div className={styles.sleepingContainer}>{result}</div>;
};

export default Furniture;
