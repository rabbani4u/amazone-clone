import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <nav className="header">
        <div className="header_Top">
          <div className="header_left_navbar">
            <MenuIcon />

            {/* Logo */}
          </div>
          {/* Logo */}
          <Link to="/">
            <img
              className="logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt=""
            />
          </Link>

          {/* Search Box   */}
          <div className="headerSearch">
            <input type="search" className="headerSearch_input" />
            <SearchIcon className="headerSearchIcon" />
          </div>
          {/* Link */}
          <div className="headerNavbar">
            {/* Signout/SignIn */}
            <Link to="/" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Hello</span>
                <span className="headerOption_two">SignIn</span>
              </div>
            </Link>

            {/* Return Order */}
            <Link to="/" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Return</span>
                <span className="headerOption_two">Order</span>
              </div>
            </Link>
            {/* Prime */}
            <Link to="/" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Try</span>
                <span className="headerOption_two">Prime</span>
              </div>
            </Link>
            {/* Profile */}
            <Link to="/" className="headerLink">
              <div className="headerOptions">
                <span className="headerOption_one">Your</span>
                <span className="headerOption_two">Profile</span>
              </div>
            </Link>

            {/* Basket */}
            <Link to="/checkout" className="headerLink">
              <div className="headerOption_Basket">
                <ShoppingBasketIcon />
                {/* Fot COunt in Basket */}
                <span className="headerOption_two basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="headerBottom">
          {/* Address */}
          <div className="headerAddress">
            <div className="headerAddressIcon">
              <LocationOnIcon />
            </div>
            <div className="headerOptions">
              <span className="headerOption_one">Deliver To </span>
              <span className="headerOption_two">Easy Coding</span>
            </div>
          </div>
          {/* HeaderBottom Nav */}
          <div className="headerBottom_Navbar">
            <span>
              <Link to="/" className="headerLink">
                All Products
              </Link>
            </span>
            <span>Books</span>
            <span>New Release</span>
            <span>Gift Ideas</span>
            <span>Easy Coding</span>
            <span>Amazon Pay</span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
