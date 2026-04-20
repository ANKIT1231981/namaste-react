import { useState } from "react";

const Header = () => {
  const [btnValue, setBtnValue] = useState("Login");
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {setBtnValue(btnValue === "Login" ? "Logout" : "Login")}}>{btnValue}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;