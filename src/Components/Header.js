import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import userContext from "../Helper/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, setUser } = useContext(userContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItem = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/instamart">
                Instamart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="cart">
                cart - {cartItem.length} Item
              </Link>
            </li>
          </ul>
        </div>
        <p>{user.name}</p>
      </div>
      <button
        className="btn"
        onClick={() => {
          setIsLoggedIn((prev) => {
            return !prev;
          });
          setUser(() => {
            if (isLoggedIn) {
              return {
                user: {
                  name: "User",
                  email: "user@gmail.com",
                },
              };
            } else {
              return {
                user: {
                  name: "Jay",
                  email: "jay@kone.com",
                },
              };
            }
          });
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Header;
