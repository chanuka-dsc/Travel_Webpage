import classes from "./MainImage.module.css";
import Button from "../UI/Button";

const MainImage = () => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["text-container"]}>
        <p className={classes["short-para"]}>
          Curabitur sollicitudin magna lectus
        </p>
        <p className={classes["long-para"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button to="/start" btnName="START TODAY" />
      </div>
    </div>
  );
};

export default MainImage;
