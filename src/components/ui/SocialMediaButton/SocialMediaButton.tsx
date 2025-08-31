import styles from "./SocialMediaButton.module.css";
import { Button } from "react-bootstrap";
import { SocialMediaButtonProps } from "./types";

function SocialMediaButton({ icon, onClick }: SocialMediaButtonProps) {
  return (
    <Button className={styles.buttonSM} onClick={onClick}>
      {icon}
    </Button>
  );
}

export default SocialMediaButton;
