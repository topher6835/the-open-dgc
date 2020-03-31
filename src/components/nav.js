import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     mobileMenuOpen: "closed",
        // }
        this.toggleMenuMobileMenu = this.toggleMenuMobileMenu.bind(this);
    }

    toggleMenuMobileMenu() {
        let tempVar = document.getElementById("nav-check").checked;
        let windowWidth = window.innerWidth;
        if(windowWidth <= 600) {
            document.getElementById("nav-check").checked = !tempVar;
        }
    }

    render() {
        return (
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                    The Open
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check" className="nav-btn-label">
                        <span className="nav-btn-icon">&nbsp;</span>
                    </label>
                </div>
                <div className="nav-links" onClick={() => this.toggleMenuMobileMenu()}>
                        <Link to="/">News</Link>
                        <Link to="/">Register</Link>
                        <Link to="/">Courses</Link>
                        <Link to="/">History</Link>
                        <Link to="/">Merch</Link>
                        <Link to="/">Sponsors</Link>
                </div>
            </div>
        )
    }
};
