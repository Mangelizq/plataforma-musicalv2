import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <span className="header__logo-icon">♪</span>
          <div className="header__logo-text">
            <h1 className="header__title">Mi Plataforma Musical</h1>
            <span className="header__subtitle">
              Tu colección musical personal
            </span>
          </div>
        </div>
        <nav className="header__nav">
          <span className="header__nav-item header__nav-item--active">
            Canciones
          </span>
          <span className="header__nav-item">Artistas</span>
          <span className="header__nav-item">Álbumes</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
