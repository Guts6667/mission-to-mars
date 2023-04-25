import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.container__header}>
      <a href="/" className={styles.container__header_brand}>
        <img src="/logo1.png" alt="Logo MTM" />
        <span>MTM</span>
      </a>
      <nav className={styles.container__header_nav}>
        <a href="/gallery" className="nav-gallery">
          Gallery
        </a>
        <a href="/contact" className="nav-contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
