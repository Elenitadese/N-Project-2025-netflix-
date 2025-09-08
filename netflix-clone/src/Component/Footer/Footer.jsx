import React from 'react'
import './Footer.css'

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Footer = () => {
  return (
    <>
      <div className="first-div">
        <div className="second-div">
          
          <div className="footer-icons">
            <ul className="icon_links">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>

              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>

          <div className="footer-data">
            <div>
              <ul>
                <li>Audio description</li>
                <li>Investors relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>cookies preferences</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>gift cards</li>
                <li>terms of use </li>
                <li>corporate information</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>media center </li>
                <li>privacy</li>
                <li>contact us</li>
              </ul>
            </div>
          </div>


          <div className='service-code'>
            <p>
              service code
            </p>
          </div>

          <div className='copy-wright'>
            &copy; 1997.2024 Netflixx, Inc.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer