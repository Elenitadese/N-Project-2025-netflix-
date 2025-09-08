import React from 'react'
import './Header.css'
import netflixLogo from "../../assets/Images/Netflix_Logo_PMS.png";  // adjust path if needed
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


// import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <div className="outer_div">
        <div className="First_div">
          {/* Center: Logo + Nav Links */}
          <div className="header_center">
            <img
              src={netflixLogo}
              alt="Netflix Logo"
              className="netflix-logo"
            />
            <ul className="nav_links">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse By Languages</li>
            </ul>
          </div>

          {/* Right: Icons */}
          <div className="header_right">
            <ul className="icon_links">
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>

              <li>
                <AssignmentIndIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header