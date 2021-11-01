import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ btnName, to }) => {
  return (
    <div className={classes.container}>
      <Link to={to}>{btnName}</Link>
      <i
        className="fa fa-chevron-circle-right"
        style={{ color: "rgb(121, 123, 180)", fontSize: "25px" }}
      ></i>
    </div>
  );
};

export default Button;
