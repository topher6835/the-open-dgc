import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import TopBanner from "../components/topBanner";
import AlertMain from '../components/alertMain';
import App from "../components/App";
import SEO from "../components/seo";

export const query = graphql`
query {
    markdownRemark(frontmatter: {templateKey: {eq: "sponsors-page"}}) {
        frontmatter {
            templateKey
            sponsorName01
            sponsorImage01
            sponsorUrl01
            sponsorName02
            sponsorImage02
            sponsorUrl02
            sponsorName03
            sponsorImage03
          }
    }
  }
`

const Sponsors = props => {
  // Get and sort course holes
  const sponsorArr = [];
  sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage01, name: props.data.markdownRemark.frontmatter.sponsorName01, link: props.data.markdownRemark.frontmatter.sponsorUrl01} );
  sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage02, name: props.data.markdownRemark.frontmatter.sponsorName01, link: props.data.markdownRemark.frontmatter.sponsorUrl02} );
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage01);
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage02);
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage03);
  
  // const k = "props.data.markdownRemark.frontmatter.";
  // for(let i = 1; i < 6; i++) { 
  //   if(i < 10) {
  //     i = "0" + i;
  //   }
  //   const holeNum = "hole" + i;
  //   const propDataString = k + holeNum;
  //   const evalPropData = eval(propDataString);
  //   if(evalPropData) {
  //     holeArr.push(evalPropData);
  //   }
  // }

  // let regex = new RegExp(`Tee_Signs_+([^]+)`, `i`);
  // const sortedArr = holeArr.filter(x => regex.test(x)).sort(
  //   (a, b) => {regex.toString(a).localeCompare(regex.toString(b))}
  // );

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <div className="course-page-content">
        <SEO title="Sponsors" />
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            <h1 style={{textAlign: "center"}}>Sponsors</h1>
            { Array.isArray(sponsorArr) && sponsorArr.length ? <App imagesArray={sponsorArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>}
            {/* { Array.isArray(sortedArr) && sortedArr.length ? <App courseHoleImages={holeArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>} */}
          </div>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
};

export default Sponsors;
