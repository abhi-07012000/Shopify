import React from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand my-1 ms-2" to="/">
            SHOPIFY
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item my-1 mx-1 ">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item my-1 mx-1 ">
                <NavLink className="nav-link" to="mens">
                  Mens
                </NavLink>
              </li>
              <li className="nav-item my-1 mx-1">
                <NavLink className="nav-link" to="womens">Womens</NavLink>
              </li>

              <li className="nav-item my-1 mx-1">
                <NavLink className="nav-link" to="electronics">Electronic</NavLink>
              </li>
              <li className="nav-item my-1 mx-1">
                <NavLink className="nav-link" to='register'>Register</NavLink>
              </li>
              <li className="nav-item my-1 mx-1">
                <NavLink className="nav-link" to="login">Log In</NavLink>
              </li>
              <li className="nav-item my-1 mx-1">
                <NavLink className="nav-link" to="cart">
                  <ShoppingCartOutlinedIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
