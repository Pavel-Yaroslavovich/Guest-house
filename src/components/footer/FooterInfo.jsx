import styles from "./footer.module.css";
import footerLogo from "../icon/Logo.svg";

const FooterInfo = () => {
  return (
    <div className={styles.footerInfo}>
      <img src={footerLogo} className={styles.footerLogo} alt="logo" />
      <address className={styles.footerAddress}>
        © Guest House, LLC. All rights reserved. Powered by Webflow
      </address>
      <p className={styles.footerTel}>
        +47 (0) 702 88 12 34 - example@webflow.io - Klubbvika 12, 8310 Kabelvag,
        Norway
      </p>
    </div>
  );
};

export default FooterInfo;
