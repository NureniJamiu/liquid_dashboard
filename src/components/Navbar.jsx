import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";

import { RiMessage2Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-right">
          <span>
            <RiMessage2Fill />
          </span>
          <span>
            <IoMdNotifications />
          </span>
          <span>
            <img src={avatar} alt="avatar" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
