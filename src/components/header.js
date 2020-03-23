import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-logo-box">
            </div>
            <div className="header-nav-primary">
                <Link to="/" className="header-nav-button">Home</Link>
                <Link to="/caddy-guide-2020" className="header-nav-button">2020 Caddy Guide</Link>
            </div>
  </header>
)

export default Header;