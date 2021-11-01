import classes from "./SubImage.module.css";
import Button from "../UI/Button";

const SubImage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image}></div>
      <div className={classes.content}>
        <h2> Lorem ipsum </h2>
        <p>
          Gravida cum sociis natoque penatibus et magnis dis parturient montes.
          Diam ut venenatis tellus in metus. Scelerisque mauris pellentesque
          pulvinar pellentesque. Dui faucibus in ornare quam viverra orci
          sagittis eu volutpat. Diam donec adipiscing tristique risus nec
          feugiat in. Mauris vitae ultricies leo integer malesuada nunc vel.
          Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.{" "}
          <br />
          Sed nisi lacus sed viverra tellus in hac. Commodo sed egestas egestas
          fringilla phasellus faucibus. In vitae turpis massa sed elementum
          tempus egestas sed.
        </p>
        <div className={classes["button-container"]}>
          <Button btnName="View more" to="/where_ever" />
        </div>
      </div>
    </div>
  );
};

export default SubImage;
