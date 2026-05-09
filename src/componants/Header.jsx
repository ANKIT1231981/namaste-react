import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineViewer from "../utils/useOnlineViewer";
import Grocery from "./Grocery";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
  const onlineViewer = useOnlineViewer();
  
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839"
        />
      </div>
      <div className="nav-items">
        <ul className="lists">
          <li>Online Status: {onlineViewer ? "✅" : "❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button className="login-btn" onClick={() => { setBtnValue(btnValue === "Login" ? "Logout" : "Login") }}>{btnValue}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;