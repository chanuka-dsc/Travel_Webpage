import logo from "../../Resources/logo.png";
import classes from "./BottomLogoArea.module.css";
import SocialLinkList from "../UI/SocialLinkList";

const BottomLogoArea = () => {
  return (
    <div className={classes.container}>
      <div className={classes["image-container"]}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes["link-contaner"]}>
        <SocialLinkList />
      </div>
    </div>
  );
};

export default BottomLogoArea;
