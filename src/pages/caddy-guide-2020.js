import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import App from "../components/App";
import SEO from "../components/seo";

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "test images"}}) {
      frontmatter {
        templateKey
        title
        date(formatString: "MMMM DD YYYY")
        hole02
        hole01
      }
      html
    }
  }
`

const CaddyGuide2020 = (props) => {
  let holeArr = [];
  const k = "props.data.markdownRemark.frontmatter."; 
  for(let i = 1; i < 5; i++) { 
    if(i < 10) {
      i = "0" + i;
    }
    const holeNum = "hole" + i;
    const propDataString = k + holeNum;
    const evalPropData = eval(propDataString);
    //console.log("!!! CG", evalPropData);
    if(evalPropData != null) {
      holeArr.push(evalPropData);
    }
  }
  holeArr.sort();

  return (
    <Layout>
      <div className="caddy-guide-container">
        <SEO title="Caddy Guide 2020" />

        <MuiThemeProvider>
        <div>
          <App courseHoleImages={holeArr} />
        </div>
        </MuiThemeProvider>

      </div>
    </Layout>
  )
}

export default CaddyGuide2020;

// import React from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import Layout from "../components/layout";
// import App from "../components/App";
// import SEO from "../components/seo";

// const CaddyGuide2020 = () => (
//   <Layout>
//     <div className="caddy-guide-container">
//       <SEO title="Caddy Guide 2020" />

//       <MuiThemeProvider>
//       <div>
//         <App />
//       </div>
//       </MuiThemeProvider>

//     </div>
//   </Layout>
// )

// export default CaddyGuide2020;
