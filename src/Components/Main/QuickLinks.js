import NavItem from "../Nav/NavItem";
import classes from "./QuickLinks.module.css";

const QuickLinks = () => {
  return (
    <div className={classes.container}>
      <p className={classes.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet labore
      </p>
      <div className={classes["bottom-container"]}>
        <div className={classes.contact}>
          <h3>Contact</h3>
          <p className={classes.title}>Lorem ipsum</p>
          <a className={classes.mail} href="mailto:loremipsum@gmail.com">
            lorem@gmail.com
          </a>
          <p className={classes.number}>+94 11 222 3333</p>
          <p className={classes.number}>+94 11 222 3333</p>
        </div>
        <div className={classes.links}>
          <h3>Quick Links</h3>
          <ul>
            <NavItem to={"/"} linkName={"Home"} />
            <NavItem to={"/products"} linkName={"Products"} />
            <NavItem to={"/about"} linkName={"About Us"} />
            <NavItem to={"/contact"} linkName={"Contact Us"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
