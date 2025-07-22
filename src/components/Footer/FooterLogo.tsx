import Logo from "../Logo";
import styles from "./Footer.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src={"./Logo.png"} alt="logo" />
      <p>Onde a realidade encontra a</p>
    </div>
  );
};

export default FooterLogo;
