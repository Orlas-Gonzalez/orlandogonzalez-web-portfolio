import styles from "./Header.module.css";
import quellkastenIcon from "../../../assets/icons/quellkasten-icon.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={quellkastenIcon} alt="Featured Icon Of Site" />
    </header>
  );
}

export default Header;
