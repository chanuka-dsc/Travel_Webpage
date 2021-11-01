import Button from "../../UI/Button";
import classes from "./SliderItem.module.css";

const SliderItem = ({ img, heading, content }) => {
  return (
    <div>
      <div className={classes.item}>
        <div>
          <img src={img} alt="img" />
        </div>
        <div className={classes["content-area"]}>
          <p className={classes.heading}>{heading}</p>
          <p>{content}</p>
          <div className={classes.button}>
            <Button btnName="View more" to="/where_ever" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
