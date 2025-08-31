import styles from "./NotFound.module.css";
import { Container } from "react-bootstrap";
import bannerImage from "../../assets/images/icon-not-found.png";
import Header from "../../components/layout/Header/Header";
import { replace, useNavigate } from "react-router-dom";
import { ROUTER_LIST } from "../../routes/treeRoutes/RouterList";
import clsx from "clsx";

function NotFound() {
  const navigate = useNavigate();
  const handleReturnToHome = () => {
    navigate(ROUTER_LIST.ROOT, { replace: true });
  };

  return (
    <>
      <Container className={clsx(styles.containerHeader, "pt-3")}>
        <Header />
      </Container>
      <Container className={styles.containerBanner}>
        <img src={bannerImage} alt="Decorative Image Of Site" />
        <section>
          <h1>404 NOT FOUND PAGE</h1>
          <p>
            Oops! Looks like you've hit a <span>dark place</span>, buddy.
          </p>
          <p>
            You can get back on track by clicking{" "}
            <span onClick={handleReturnToHome}>here</span>.
          </p>
        </section>
      </Container>
    </>
  );
}

export default NotFound;
