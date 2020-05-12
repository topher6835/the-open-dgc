import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AlertMain from "../components/alertMain";
import TopBanner from "../components/topBanner";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <AlertMain />
      <TopBanner />
      <div style={{ height: "250px", lineHeight: "125px", textAlign: "center", backgroundColor: "#fffcfd"}}>
        <h2>Contact</h2>
        <div>
          Email: <a href="mailto:theopendgc@nealdambra.com">theopendgc@nealdambra.com</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
