import styles from "./Home.module.css";
import { Container } from "react-bootstrap";
import Header from "../../components/layout/Header/Header";
import Banner from "../../components/layout/Banner/Banner";
import clsx from "clsx";

function Home() {
  return (
    <>
      <Container className={clsx(styles.containerHeader, "pt-3")}>
        <Header />
      </Container>
      <Banner />
    </>
  );
}

export default Home;
