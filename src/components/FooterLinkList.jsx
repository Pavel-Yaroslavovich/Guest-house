import styles from "./footer.module.css";

const FooterLinkList = () => {
  const arrList = [
    "Pages",
    "Start",
    "Contact",
    "Our history",
    "Licenses",
    "Instructions",
    "Style guide",
  ];
  const list = arrList.map((elem, i) => {
    return (
      <li className={styles.list} key={i}>
        {elem}
      </li>
    );
  });
  return (
    <div className={styles.info}>
      <ul className={styles.linkList}>{list}</ul>
    </div>
  );
};

export default FooterLinkList;
