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
      {/* <div style={{ height: "250px", lineHeight: "125px", textAlign: "center", backgroundColor: "#bbdba9"}}> */}
      <div style={{ textAlign: "center", backgroundColor: "#bbdba9"}}>
        <h1 style={{ fontSize: "2.5em" }}>Contact</h1>
        <div className="contact-individual">
          <p>For competition or course questions:</p>
          <p>Neal Dambra, Tournament Director</p>
          <p>Email: <a href="mailto:theopendgc@nealdambra.com">theopendgc@nealdambra.com</a></p>
          <p>281-851-8872</p>
        </div>
        <div className="contact-individual">
          <p>For sponsorship inquiries:</p>
          <p>Jim Hudson, Tournament Director</p>
          <p>Email: <a href="mailto:jchudsontx@gmail.com">jchudsontx@gmail.com</a></p>
          <p>281-904-5281</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;