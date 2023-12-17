import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./asset/logo.svg" alt="logo" />{" "}
      </div>
      <div className="right-side-nav">
        <div className="notification_bell">
          <i className="fa-regular fa-bell"></i>
        </div>
        <div className="profile_image"></div>
        <div className="user">
          <div><b>John Doe</b></div>
          <div className="text_color">jodoe@deloitte.com</div>
        </div>
      </div>
    </div>
  );
}
