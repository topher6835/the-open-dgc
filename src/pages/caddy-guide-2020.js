import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import App from "../components/App";
import SEO from "../components/seo";

const CaddyGuide2020 = () => (
  <Layout>
    <div className="caddy-guide-container">
      <SEO title="Caddy Guide 2020" />

      <MuiThemeProvider>
      <div>
        <App />
      </div>
      </MuiThemeProvider>

    </div>
  </Layout>
)

export default CaddyGuide2020;
