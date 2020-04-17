import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import openLogo from "../images/The Open_logo.jpg";

const TopBanner = () => (
    <div className="top-logo" ><img src={openLogo} /></div>
)

export default TopBanner;