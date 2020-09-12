import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* image component */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search Component */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* header navigation */}
      <div className="header__nav">
        {/* the signin */}
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello Guest</span>
            <span className="header__optionLineTwo"> Sign In</span>
          </div>
        </Link>
        {/* the return orders */}
        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> Orders </span>
        </div>
        {/* the your prime */}
        <div className="header__option">
          <span className="header__optionLineOne"> Your </span>
          <span className="header__optionLineTwo"> Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;