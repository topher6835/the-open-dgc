import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import AlertMain from '../components/alertMain';
import TopBanner from "../components/topBanner";
import App from "../components/App";
import SEO from "../components/seo";
import courseHeroDefaultImg from "../../content/images/grass.jpg";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
            hole06
            hole07
            hole08
            hole09
            hole10
            hole11
            hole12
            hole13
            hole14
            hole15
            hole16
            hole17
            hole18
          }
          html
    }
  }
`

const CourseInfo = props => {
  return (
    <div className="course-info">
      <p>{props.descrip}</p>
      <div className="" dangerouslySetInnerHTML={{__html: props.descripBody}}></div>
    </div>
  )
}
const CourseHero = props => {
  let heroImg;
  if(props.heroImg) {
    heroImg = props.heroImg;
  } else {
    heroImg = courseHeroDefaultImg;
  }

  return (
    <div className="course-hero" style={{ height: '360px', backgroundImage: `url(${heroImg})` }}>
      <div className="course-hero-title">{props.courseName}</div>
    </div>
  )
}

const Course = props => {

  // Get and sort course holes
  const holeArr = [];
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

  let regex = new RegExp(`Tee_Signs_TOABT+([^]+).jpg`, `i`);
  const sortedArr = holeArr.filter(x => regex.test(x)).sort(
    (a, b) => {regex.toString(a).localeCompare(regex.toString(b))}
  );
  
  const displayTitle = props.data.markdownRemark.frontmatter.displayTitle;
  const courseSite = props.data.markdownRemark.frontmatter.site;
  const courseLocation = props.data.markdownRemark.frontmatter.location;
  const courseAddress = props.data.markdownRemark.frontmatter.address;

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <div className="course-page-content">
        <SEO title={displayTitle} />
        <CourseHero heroImg={props.data.markdownRemark.frontmatter.courseHeroImage} courseName={props.data.markdownRemark.frontmatter.displayTitle} />
        <div className="course-page-text">
          <h1>{courseSite && courseLocation ? `${courseSite} in ${courseLocation}` :  [courseLocation ? `${displayTitle} in ${courseLocation}` : `${displayTitle}`] }</h1>
          <CourseInfo descrip={props.data.markdownRemark.frontmatter.coursesDescription} descripBody={props.data.markdownRemark.html} />
        </div>
        
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            <h1 style={{textAlign: "center"}}>Caddy Guide</h1>
            { Array.isArray(sortedArr) && sortedArr.length ? <App courseHoleImages={sortedArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>}
          </div>
        </MuiThemeProvider>
        <div className="course-address-content">
          <h1>Address</h1>
          {courseAddress ? courseAddress : "..."}
        </div>
      </div>
    </Layout>
  )
};

export default Course;
