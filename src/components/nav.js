import React, { useState } from "react";
import "./Styles/nav.css";
import navBell from "../Images/navBell.png";
import chat from "../Images/chat.png";
import avatar from "../Images/img_avatar.png";
import profile from "../Images/profile-user.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Createpin from "./createpin";

function Nav() {
  console.log("Rendered nav");

  const [searchTxt, setSearchTxt] = useState("");
  const inputTxt = (event) => {
    setSearchTxt(event.target.value);
  };

  return (
    <div className="nav-out-container">
      <div className="navContainer">
        <div className="navBtn nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="homeTxt">Home</p>
          </Link>
        </div>
        <div className="navBtn createBtn nav">
          <Link to="/create">
            <p className="createTxt">Create</p>
          </Link>
        </div>
        <input
          className="searchBox nav"
          type="text"
          onChange={inputTxt}
          value={searchTxt}
        ></input>
        <img className="navBellIcon nav" src={navBell} alt="Bell icon"></img>
        <img className="navChatIcon nav" src={chat} alt="Chat icon"></img>
        <Link to="/profile">
          <img className="navChatIcon nav" src={profile} alt="Chat icon"></img>
        </Link>
        <div className="navBtn nav">
          <Link to="/login">
            <p className="createTxt">Log In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
