import React from "react";
import { Menu, stantech } from "../../assets/svg";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

// Define the main navigation links
const mainNav = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about",
  },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation to the specified URL
  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.innerHeader} container`}>
        <div className={styles.logo}>
          <img src={stantech} alt="Stantech.ai Logo" />
        </div>
        <nav>
          <ul className={`${styles.navLinks} `}>
            {mainNav.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleNavigation(item.url)}
                  className={`${
                    location.pathname === item.url ? styles.active : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
