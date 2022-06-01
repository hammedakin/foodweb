import React from "react";
import { NavLink, Link } from "react-router-dom";
import ScrollTopTopButton from "./ScrollToTopButton";
// import logo from "./logo.jpeg";
const Navbar = () => {

  
  return (
    <>

<nav class="navbar navbar-expand-md navbar-light shadow-none fixed-top" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand light-text" href="#">Trynewthis.com</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars light-text"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav text-center animated fadeInUp mx-auto">
            </ul>
            <ul class="navbar-nav animated fadeIn text-center">
              <li class="nav-item">
                <NavLink tag={Link} activeClassName="active1 " to="/">
                  Home
                </NavLink>
              </li>


              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  activeClassName="active1"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <Link to="/join-us">
                <li class=" btn-contact">
                  <button type="btn" class="btn light-bg br-lg">
                    Join Us
                  </button>
                </li>
              </Link>
            </ul>
    </div>
  </div>
</nav>
      <ScrollTopTopButton />
    </>
  );
};

export default Navbar;
