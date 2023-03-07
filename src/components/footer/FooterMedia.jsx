import styles from "./footer.module.css";
import telegram from "../icon/footerMedia/telegram.svg";
import facebook from "../icon/footerMedia/facebook.svg";
import instagram from "../icon/footerMedia/instagram.svg";

const FooterMedia = () => {
  return (
    <div className={styles.mediaBlock}>
      <h4 className={styles.mediaTitle}>Social Media</h4>
      <div className={styles.mediaMessage}>
        <img className={styles.mediaLogo} src={telegram} alt="telegram" />
        <img className={styles.mediaLogo} src={facebook} alt="facebook" />
        <img className={styles.mediaLogo} src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default FooterMedia;
