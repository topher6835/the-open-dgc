import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import openLogo from "../images/The Open_logo.jpg";

const TopBanner = () => (
    <div className="top-logo" ><Link to="/"> <img src={openLogo} /> </Link></div>
)

export default TopBanner;