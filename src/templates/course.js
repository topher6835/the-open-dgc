import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import AlertMain from '../components/alertMain';
import TopBanner from "../components/topBanner";
import App from "../components/App";
import SEO from "../components/seo";
import { cloudinaryHeroUrl, cloudinaryUrlTileImage, cloudinaryUrlImageView } from "../components/utils";
import courseHeroDefaultImg from "../../content/images/grass.jpg";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            templateKey
            title
            coursesPageTitle
            coursesDescription
            coursePageHeroImage
            coursePageHeroTitle
            coursePageDescriptionHeadline
            address
            locationLink
            guideDownload
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
            hole19
            hole20
          }
          html
    }
  }
`

//* Cloudinary URL format:
//* https://res.cloudinary.com/<cloud_name>/<resource_type>/<type>/<transformations>/{{image}}"
//* https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id>.<format>
// https://cloudinary.com/documentation/transformation_reference
// const urlRegexMatchPost = /upload(.*)/;
// const urlRegexMatchPre = /(.*)upload/;
// const urlThumb = "upload/c_scale,w_215";
// const imgViewQuality70 = "upload/q_70";

function targetBlankLinks(props) {
  const aPattern = /<a /g;

  return props.replace(aPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
}

const CourseInfo = props => {
  let modHtml = targetBlankLinks(props.descripBody);
  return (
    <>
      <div className="course-info">
        {/* <p>{props.descrip}</p> */}
        <div className="" dangerouslySetInnerHTML={{__html: modHtml}}></div>
      </div>
    </>
  )
}
const CourseHero = props => {
  let heroImg;
  if(props.heroImg) {
    let urlHeroImg = props.heroImg;
    heroImg = cloudinaryHeroUrl(urlHeroImg)
    // let coursePageHeroImageReduced = urlHeroImg.match(urlRegexMatchPre)[1] + imgViewQuality70 + urlHeroImg.match(urlRegexMatchPost)[1]
    // heroImg = coursePageHeroImageReduced;
  } else {
    heroImg = courseHeroDefaultImg;
  }

  return (
    <div className="course-hero" style={{ height: '360px', backgroundImage: `url(${heroImg})` }}>
      <div className="course-hero-title">{props.courseName}</div>
    </div>
  )
}

const CaddyGuideDownload = props => {
  return (
    <div className="caddy-guide-download" style={{textAlign: 'center'}}>
      <h5 style={{textAlign: "center"}}>
          Before arriving to the event, please download the caddy guide to your mobile device with the following link. This is to ensure you have access to the guide in the event of poor network conditions.
      </h5>
      <a href={props.downLoadLink} target="_blank" rel="noopener noreferrer">Caddy Guide Download</a>
    </div>
  )
}

const Course = props => {

  // Get and sort course holes
  const holeArr = [];
  const k = "props.data.markdownRemark.frontmatter.";
  for(let i = 1; i < 21; i++) {
    if(i < 10) {
      i = "0" + i;
    }
    const holeNum = "hole" + i;
    const propDataString = k + holeNum;
    // returns img url from graphql:
    const evalPropData = eval(propDataString);
    if(evalPropData) {
      holeArr.push(evalPropData);
    }
  }
  
  let regex = new RegExp(`Tee_Signs_+([^]+)`);
  // let regex = new RegExp(`Tee_Signs_+([^]+)`, `i`);

  // Remove strings that dont contatin "Tee_signs" and then sort by file name.
  let sortedArr = holeArr.filter(x => x.match(regex)).sort(
    (a, b) => {
      return a.match(regex).toString().localeCompare(b.match(regex).toString())
    });

  const arrayWithSortedObjects = [];

  // match/append cloudinary transformation URL here, populated sorted array:
  sortedArr.forEach(
    i => arrayWithSortedObjects.push({
      url: cloudinaryUrlImageView(i),
      thumbnail: cloudinaryUrlTileImage(i)
      // url: i.match(urlRegexMatchPre)[1] + imgViewQuality70 + i.match(urlRegexMatchPost)[1],
      // thumbnail: i.match(urlRegexMatchPre)[1] + urlThumb + i.match(urlRegexMatchPost)[1]
    })
  );

  const coursePageHeroImageURL = props.data.markdownRemark.frontmatter.coursePageHeroImage;
  const coursePageHeroTitle = props.data.markdownRemark.frontmatter.coursePageHeroTitle;
  const coursePageDescriptionHeadline = props.data.markdownRemark.frontmatter.coursePageDescriptionHeadline;
  const courseAddress = props.data.markdownRemark.frontmatter.address;
  const courseAddressMapsUrl = " https://maps.google.com/?q=" + props.data.markdownRemark.frontmatter.address;
  const courseLocationLink = props.data.markdownRemark.frontmatter.locationLink;
  const caddyGuideDownload = props.data.markdownRemark.frontmatter.guideDownload;

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <div className="course-page-content">
        <SEO title={props.data.markdownRemark.frontmatter.coursesPageTitle} />
        <CourseHero heroImg={coursePageHeroImageURL} courseName={coursePageHeroTitle} />
        <div className="course-page-text">
          <h1>{coursePageDescriptionHeadline ? `${coursePageDescriptionHeadline}` : ``}</h1>
          {/* <h1>{courseSite && courseLocation ? `${courseSite} in ${courseLocation}` :  [courseLocation ? `${coursePageHeroTitle} in ${courseLocation}` : `${coursePageHeroTitle}`] }</h1> */}
          {/* Seperated description (courses page) from body (course page)
          <CourseInfo descrip={props.data.markdownRemark.frontmatter.coursesDescription} descripBody={props.data.markdownRemark.html} /> */}
          <CourseInfo descripBody={props.data.markdownRemark.html} />
        </div>
        
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            <h1 style={{textAlign: "center"}}>Caddie Guide</h1>

            { caddyGuideDownload ? <CaddyGuideDownload downLoadLink={caddyGuideDownload} /> : '' }
            
            { Array.isArray(arrayWithSortedObjects) && arrayWithSortedObjects.length ? <App imagesArray={arrayWithSortedObjects} /> : <p style={{textAlign: "center"}}>Coming soon...</p>}
          </div>
        </MuiThemeProvider>
        <div className="course-address-content">
          {courseAddress ? <><h1>Address</h1><a href={courseAddressMapsUrl} target="_blank" rel="noopener noreferrer">{courseAddress}</a><br/><br/></> : ""}
          {courseLocationLink ? <><br/><h1>Link to Location</h1><a href={courseLocationLink} target="_blank" rel="noopener noreferrer"> {coursePageHeroTitle ? coursePageHeroTitle : "Link to map" } </a><br/><br/></> : ""}

          {/* {courseAddress ? <><h1>Address</h1><a href={courseAddressMapsUrl} target="_blank" rel="noopener noreferrer">{courseAddress}</a></> : 
          courseLocationLink ? <><h1>Location</h1><a href={courseLocationLink} target="_blank" rel="noopener noreferrer"> Link </a></> : ""} */}
        </div>
      </div>
    </Layout>
  )
};

export default Course;
