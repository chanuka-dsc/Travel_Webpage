import classes from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <form className={classes.search}>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchButton;
