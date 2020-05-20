import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import AlertMain from '../components/alertMain';
import App from "../components/App";
import SEO from "../components/seo";


import sponsorsTempImg01 from "../images/sponsorsTemp/web-sponsor_02-lo.jpg";
import sponsorsTempImg02 from "../images/sponsorsTemp/web-sponsor_03-lo.jpg";

export const query = graphql`
query {
    markdownRemark(frontmatter: {title: {eq: "test-course1"}}) {
        frontmatter {
            templateKey
            title
            displayTitle
            site
            location
            address
            courseHeroImage
            coursesDescription
            date(formatString: "MMMM DD YYYY")
            hole01
            hole02
            hole03
            hole04
            hole05
          }
          html
    }
  }
`

const Sponsors = props => {
  // Get and sort course holes
  const holeArr = [];
  holeArr.push(sponsorsTempImg01);
  holeArr.push(sponsorsTempImg02);
  
  const k = "props.data.markdownRemark.frontmatter.";
  for(let i = 1; i < 6; i++) { 
    if(i < 10) {
      i = "0" + i;
    }
    const holeNum = "hole" + i;
    const propDataString = k + holeNum;
    const evalPropData = eval(propDataString);
    if(evalPropData) {
      holeArr.push(evalPropData);
    }
  }

  let regex = new RegExp(`Tee_Signs_+([^]+)`, `i`);
  //let regex = new RegExp(`Tee_Signs_TOABT+([^]+).jpg`, `i`);
  const sortedArr = holeArr.filter(x => regex.test(x)).sort(
    (a, b) => {regex.toString(a).localeCompare(regex.toString(b))}
  );

  return (
    <Layout>
      <AlertMain />
      <div className="course-page-content">
        <SEO title="Sponsors" />
        
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            <h1 style={{textAlign: "center"}}>Sponsors</h1>
            { Array.isArray(sortedArr) && sortedArr.length ? <App courseHoleImages={holeArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>}
          </div>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
};

export default Sponsors;
