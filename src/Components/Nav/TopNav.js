import SocialLink from "../UI/SocialLink";
import classes from "./TopNav.module.css";
import tw from "../../Resources/tw2.png";
import yt from "../../Resources/yt2.png";
import insta from "../../Resources/insta.png";
import fb from "../../Resources/fb2.png";
import logo from "../../Resources/logo.png";
import SearchButton from "../UI/SearchButton";

const TopNav = () => {
  return (
    <div className={classes["top-nav"]}>
      <div className={classes["social"]}>
        <ul>
          <SocialLink logo={tw} />
          <SocialLink logo={yt} />
          <SocialLink logo={insta} />
          <SocialLink logo={fb} />
        </ul>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <SearchButton />
      </div>
    </div>
  );
};

export default TopNav;
