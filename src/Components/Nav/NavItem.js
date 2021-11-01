import { Link } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = ({ linkName, to }) => {
  return (
    <li className={classes["nav-item"]}>
      <Link to={to}>{linkName}</Link>
    </li>
  );
};

export default NavItem;
