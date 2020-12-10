import { Link } from "gatsby";
import React, { Component } from "react";
import { useStaticQuery, graphql } from "gatsby";

export default class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     mobileMenuOpen: "closed",
        // }
        this.toggleMenuMobileMenu = this.toggleMenuMobileMenu.bind(this);
    }

//     data = useStaticQuery(graphql`
//     query Images {
//         placeholderImage: file(
//           relativePath: { eq: "The Open_web-home page.jpg" }
//         ) {
//           id
//           childImageSharp {
//             fluid(maxWidth: 2400) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//   `)

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
                {/* <div className="nav-header">
                    <div className="nav-title">
                        <Link to="/" style={{ textDecoration:"none" }}>The Open</Link>
                    </div>
                </div> */}
                <div className="nav-btn">
                    <label htmlFor="nav-check" className="nav-btn-label">
                        <span className="nav-btn-icon">&nbsp;</span>
                    </label>
                </div>
                <div className="nav-links" onClick={() => this.toggleMenuMobileMenu()}>
                    <Link id="home-mobile-nav" style={{display: "none"}} to="/">Home</Link>
                    <Link to="#news-component">News</Link>
                    {/* <Link to="/">Register</Link> */}
                    <Link to="/event-courses">Caddy Guide</Link>
                    {/* <Link to="/">History</Link> */}
                    {/* <Link to="/">Merch</Link> */}
                    <Link className="disabledNavLink" to="/sponsors">Sponsors</Link>
                    <Link className="disabledNavLink" to="/course-design">Course Design</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        )
    }
};
