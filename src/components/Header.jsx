import styles from "./header.module.css";
import logo from "./icon/Logo.svg";
import LinkList from "./LinkList";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logotip guest house" />
      <LinkList />
      <button className={styles.btn}>{"Book now"}</button>
    </header>
  );
};

export default Header;
