import styles from "./header.module.css";

const LinkList = () => {
  const linkArr = [
    {
      id: 1,
      title: "Start",
    },
    {
      id: 2,
      title: "Contact",
    },
    {
      id: 3,
      title: "Our History",
    },
  ];

  const resultLinkArr = linkArr.map((elem) => {
    return (
      <li key={elem.id}>
        <a href="!#" className={styles.link}>
          {elem.title}
        </a>
      </li>
    );
  });

  return <ul className={styles.list}>{resultLinkArr}</ul>;
};

export default LinkList;
