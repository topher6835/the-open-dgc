import React from "react";
import { Link, graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import TopBanner from "../components/topBanner"
import App from "../components/App";
import SEO from "../components/seo";
import courseHeroDefaultImg from "../../content/images/grass.jpg";
import courseHeroImg from "../../content/images/Hero_Sawgrass-PLAYERS-16-and-17.jpg";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            templateKey
            title
            displayTitle
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
    <div>
      <p>{props.descrip}</p>
    </div>
  )
}
const CourseHero = props => {
  let heroImg;
  console.log("courseHeroImage:", props.heroImg);
  if(props.heroImg) {
    heroImg = props.heroImg;
  } else {
    heroImg = courseHeroDefaultImg;
  }

  return (
    <div className="course-hero" style={{ height: '360px', backgroundImage: `url(${heroImg})` }}>
      <h3>{props.courseName}</h3>
    </div>
  )
}

const Course = props => {

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
  holeArr.sort();

  return (
    <Layout>
      <TopBanner />
      <div className="caddy-guide-container">
        <SEO title="Caddy Guide 2020" />
        {/* <p>COURSE</p>
        <Link to="/courses">BACK TO COURSES</Link> */}
        <CourseHero heroImg={props.data.markdownRemark.frontmatter.courseHeroImage} courseName={props.data.markdownRemark.frontmatter.displayTitle} />
        <div className="course-page-text">
          <h1>{props.data.markdownRemark.frontmatter.displayTitle}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <CourseInfo descrip={props.data.markdownRemark.frontmatter.coursesDescription} />
        </div>

        <MuiThemeProvider>
        <div className="course-hole-main" >
          <App courseHoleImages={holeArr} />
        </div>
        </MuiThemeProvider>

      </div>
    </Layout>
  )
};

export default Course;
