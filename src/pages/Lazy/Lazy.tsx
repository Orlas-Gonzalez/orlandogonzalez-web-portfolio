import styles from "./Lazy.module.css";
import { Container } from "react-bootstrap";
import Header from "../../components/layout/Header/Header";
import loadImage from "../../assets/images/icon-loading.png";
import clsx from "clsx";

function Lazy() {
  return (
    <>
      <Container className={clsx(styles.containerHeader, "pt-3")}>
        <Header />
      </Container>
      <Container className={styles.containerBanner}>
        <img src={loadImage} alt="Decorative Image Of Site" />
        <section>
          <h1>Charging Page...</h1>
          <p>
            I appreciate your patience, my page will load{" "}
            <span>completely in a few moments</span>, you know the internet
            sometimes plays in very strange ways.
          </p>
        </section>
      </Container>
    </>
  );
}

export default Lazy;
