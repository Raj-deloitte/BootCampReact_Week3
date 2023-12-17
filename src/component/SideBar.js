import React, { useState } from "react";
import "./SideBar.css";

export default function SideBar() {
  const [isExpanded, setExpanded] = useState(false);
  const toggleSideBar = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <div className={`side-navbar ${isExpanded ? "expanded" : ""}`}>
        <div className="icon" onClick={toggleSideBar}>
          <img src="./asset/Home.svg" alt="home" /> {isExpanded && <div className="learning">Home</div>}
          <img src="./asset/Book.svg" alt="book" />{isExpanded && <div className="learning">My Learning</div>}
          <img src="./asset/settings.svg" alt="setting" />{isExpanded && <div className="learning">Setting</div>}
        </div>
      </div>
    </>
  );
}
