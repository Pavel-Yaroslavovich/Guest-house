import styles from "./footer.module.css";
import FooterLinkList from "./FooterLinkList";
import FooterMedia from "./FooterMedia";
import FooterNewsletter from "./FooterNewsletter";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contentBlock}>
        <FooterLinkList />
        <FooterMedia />
        <FooterNewsletter />
      </div>
      <FooterInfo />
    </div>
  );
};

export default Footer;
