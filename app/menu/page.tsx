"use client";

import React, { useState } from "react";
import "./styles.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav className="nav">
      <button className="hamburger" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="menu">
        Menu
      </button>
      <ul className={`menu ${menuOpen ? "open" : ""}`} id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
