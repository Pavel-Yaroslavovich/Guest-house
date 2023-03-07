import styles from "./footer.module.css";

const FooterNewsletter = () => {
  return (
    <div className={styles.newsletterBlock}>
      <h5 className={styles.newsletterTitle}>Newsletter</h5>
      <p className={styles.newsletterText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className={styles.intBtn}>
        <input
          type="text"
          className={styles.newsletterInt}
          placeholder="Email"
        />
        <button className={styles.newsletterBtn}>Submit</button>
      </div>
    </div>
  );
};

export default FooterNewsletter;
