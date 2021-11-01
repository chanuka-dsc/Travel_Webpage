import classes from "./Slider.module.css";
import SliderItem from "./SliderItem/SliderItem";
import imgSliderOne from "../../Resources/img2.jpg";
import imgSliderTwo from "../../Resources/img4.jpg";

const Slider = () => {
  const sliderOneHeading =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const sliderTwoHeading =
    "LLorem ipsum dolor sit amet, consectetur adipiscing elit";
  const sliderOneContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const sliderTwoContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className={classes["slider-container"]}>
      <SliderItem
        img={imgSliderOne}
        heading={sliderOneHeading}
        content={sliderOneContent}
      />
      <SliderItem
        img={imgSliderTwo}
        heading={sliderTwoHeading}
        content={sliderTwoContent}
      />
    </div>
  );
};

export default Slider;
