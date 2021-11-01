import classes from "./SocialLinkList.module.css";
import SocialLink from "./SocialLink";
import fb from "../../Resources/fb.png";
import wh from "../../Resources/wh.png";
import li from "../../Resources/linked.png";
import yt from "../../Resources/yt.png";
import tw from "../../Resources/tw.png";

const SocialLinkList = () => {
  return (
    <ul className={classes.list}>
      <SocialLink logo={fb} />
      <SocialLink logo={yt} />
      <SocialLink logo={tw} />
      <SocialLink logo={wh} />
      <SocialLink logo={li} />
    </ul>
  );
};
export default SocialLinkList;
