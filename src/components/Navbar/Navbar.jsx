import "./style.scss";
import { navLinks } from "../../constants/data";
//icons
import { DownIcon, NotificationIcon } from "../../constants/icons";
//images
import { profile } from "../../constants/images";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const name = "Mohammed Faris";
  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3 style={{ textDecoration: "none" }}>ZiUKE</h3>
        </NavLink>
      </div>
      <div className="nav-links-container">
        {navLinks.map((navlink) => (
          // <NavLink to={navlink?.route} style={{ textDecoration: "none" }}>
          <p key={navlink?.id}>{navlink?.name}</p>
          // </NavLink>
        ))}
      </div>
      <div className="nav-profile-container">
        <img src={NotificationIcon} alt="notification" />
        <div className="nav-profile">
          <NavLink to="/post" style={{ textDecoration: "none" }}>
            <Button text="Post Job" />
          </NavLink>
          <div className="nav-profile-image">
            <img src={profile} alt="profile" />
          </div>
          <p>{name}</p>
          <img className="nav-down-icon" src={DownIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
