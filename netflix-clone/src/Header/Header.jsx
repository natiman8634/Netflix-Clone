import React from "react";
import "./Header.css";

// Material Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <nav className="navbar">

      {/* LEFT SECTION */}
      <div className="left-section">

        {/* Netflix Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />

        <ul className="nav-links">
          <li>Netflix</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="right-section">
        <SearchIcon className="icon" />

        <div className="notification">
          <NotificationsIcon className="icon" />
          <span className="badge">2</span>
        </div>

        <AccountBoxIcon className="icon" />
        <ArrowDropDownIcon className="icon" />
      </div>

    </nav>
  );
}

export default Header;
