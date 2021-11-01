import classes from "./Nav.module.css";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <ul>
        <NavItem to={"/"} linkName={"Home"} />
        <NavItem to={"/about"} linkName={"About"} />
        <NavItem to={"/solutions"} linkName={"Solutions"} />
        <NavItem to={"/getStarted"} linkName={"Get Started"} />
        <NavItem to={"/research"} linkName={"Research"} />
        <NavItem to={"/reports"} linkName={"Reports"} />
        <NavItem to={"/branches"} linkName={"Branches"} />
        <NavItem to={"/faq"} linkName={"FAQ"} />
        <NavItem to={"/contactUs"} linkName={"Contact us"} />
      </ul>
    </div>
  );
};

export default Nav;
