import styles from "./comeTogether.module.css";
import wifi from "../icon/comeTogether/wifi.svg";
import bread from "../icon/comeTogether/bread.svg";
import figure from "../icon/comeTogether/figure.svg";
import knifeFork from "../icon/comeTogether/knifeFork.svg";

const ComeEnumeration = () => {
  const enumeration = [
    {
      id: 1,
      img: wifi,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: bread,
      text: "Nullam scelerisque aliquam odio et faucibus.",
    },
    {
      id: 3,
      img: figure,
      text: "Nulla rhoncus feugiat eros quis consectetur.",
    },
    {
      id: 4,
      img: knifeFork,
      text: "Morbi neque ex, condimentum.",
    },
  ];

  const res = enumeration.map((elem) => {
    return (
      <div key={elem.id} className={styles.enumerationBlock}>
        <img src={elem.img} className={styles.img} alt="logo" />
        <p className={styles.enumerationText}>{elem.text}</p>
      </div>
    );
  });

  return <div className={styles.enumeration}>{res}</div>;
};

export default ComeEnumeration;
