import styles from "./header.module.css";
import logo from "../icon/Logo.svg";
import LinkList from "./LinkList";

const Header = ({ setActive }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logotip guest house" />
      <LinkList />
      <button className={styles.btn} onClick={() => setActive(false)}>
        {"Book now"}
      </button>
    </header>
  );
};

export default Header;
