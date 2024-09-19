import NavBar from "./NavBar";
import logo from "../images/logo_2024.png";
import blue_wave_small from "../images/blue_wave_header_small.png";
import blue_wave_large from "../images/blue_wave_header_large.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  // Function to handle logo click, scrolling to the top of the page smoothly
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className="header_flex">
        <NavLink to="/" onClick={handleLogoClick}>
          {/* Link to the home page with click handler */}
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="image_nav_relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={blue_wave_large} />
          <img className="blue_wave_header" src={blue_wave_small} alt="" />
        </picture>
        <NavBar />
      </div>
    </header>
  );
}
