import classes from "./SocialLink.module.css";

const SocialLink = ({ logo }) => {
  return (
    <li className={classes["list-item"]}>
      <a href="#1">
        <img src={logo} alt="fb" />
      </a>
    </li>
  );
};

export default SocialLink;
