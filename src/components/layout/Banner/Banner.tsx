import styles from "./Banner.module.css";
import { Container } from "react-bootstrap";
import bannerImage from "../../../assets/images/icon-maintenance.png";
import SocialMediaButton from "../../ui/SocialMediaButton/SocialMediaButton";
import {
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiInstagramLogoDuotone,
  PiWhatsappLogoDuotone,
  PiAtDuotone,
} from "react-icons/pi";
import clsx from "clsx";
import toast from "react-hot-toast";

function Banner() {
  const socialMedias = [
    <PiGithubLogoDuotone />,
    <PiLinkedinLogoDuotone />,
    <PiInstagramLogoDuotone />,
    <PiWhatsappLogoDuotone />,
    <PiAtDuotone />,
  ];

  const redirectGithub = () => {
    const confirmRedirect = window.confirm(
      "Thank you very much for visiting my web portfolio. You're about to be redirected to my Github. Would you like to continue?"
    );
    if (confirmRedirect) {
      window.location.href = "https://github.com/Orlas-Gonzalez";
    }
  };
  const redirectLinkedin = () => {
    const confirmRedirect = window.confirm(
      "Thank you very much for visiting my web portfolio. You're about to be redirected to my LinkedIn. Would you like to continue?"
    );
    if (confirmRedirect) {
      window.location.href = "https://www.linkedin.com/in/morlandogarcia/";
    }
  };
  const redirectInstagram = () => {
    const confirmRedirect = window.confirm(
      "Thank you very much for visiting my web portfolio. You're about to be redirected to my Instagram. Would you like to continue?"
    );
    if (confirmRedirect) {
      window.location.href = "https://www.instagram.com/orlando.gonzalez.rev/";
    }
  };
  const redirectWhatsApp = () => {
    const confirmRedirect = window.confirm(
      "Thank you very much for visiting my web portfolio. You're about to be redirected to my WhatsApp. Would you like to continue?"
    );
    if (confirmRedirect) {
      window.location.href = "https://wa.me/4428209319";
    }
  };
  const redirectEmail = async () => {
    try {
      await navigator.clipboard.writeText("morlando.garcia.glez@gmail.com");
      toast("Email copied to clipboard", { icon: "✅" });
    } catch (err) {
      toast("Error copying email to clipboard", { icon: "❌" });
    }
  };

  const redirectSocialMedia = [
    redirectGithub,
    redirectLinkedin,
    redirectInstagram,
    redirectWhatsApp,
    redirectEmail,
  ];

  return (
    <Container className={clsx(styles.containerBanner, "pt-0")}>
      <img src={bannerImage} alt="Decorative Image Of Site" />
      <section>
        <h1>ORLANDOGONZALEZ.DEV</h1>
        <p>
          I'm working on something that will <span>blow your mind</span>
        </p>
        <p>But in the meantime, you can find me at</p>
        <Container
          className={clsx(styles.containerSocialMedia, "d-flex gap-2 mb-4")}
        >
          {socialMedias.map((smApp, index) => {
            return (
              <SocialMediaButton
                key={index}
                icon={smApp}
                onClick={redirectSocialMedia[index]}
              />
            );
          })}
        </Container>
        <code>{`console.log("Have a nice day :)");`}</code>
      </section>
    </Container>
  );
}

export default Banner;
