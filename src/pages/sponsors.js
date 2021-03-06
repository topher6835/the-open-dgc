import React from "react";
import { graphql } from "gatsby";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Layout from "../components/layout";
import TopBanner from "../components/topBanner";
import AlertMain from '../components/alertMain';
import App from "../components/App";
import SEO from "../components/seo";

//import courseHeroDefaultImg from "../../content/images/grass.jpg";
import { cloudinaryHeroUrl, cloudinaryUrlTileImage, cloudinaryUrlImageView } from "../components/utils";

export const query = graphql`
query {
    markdownRemark(frontmatter: {templateKey: {eq: "sponsors-page"}}) {
        frontmatter {
            templateKey
            sponsorsPageHeroImage
            sponsorsPageHeroTitle
            sponsorName01
            sponsorImage01
            sponsorUrl01
            sponsorOrder01
            sponsorName02
            sponsorImage02
            sponsorUrl02
            sponsorOrder02
            sponsorName03
            sponsorImage03
            sponsorUrl03
            sponsorOrder03
            sponsorName04
            sponsorImage04
            sponsorUrl04
            sponsorOrder04
            sponsorName05
            sponsorImage05
            sponsorUrl05
            sponsorOrder05
            sponsorName06
            sponsorImage06
            sponsorUrl06
            sponsorOrder06
            sponsorName07
            sponsorImage07
            sponsorUrl07
            sponsorOrder07
            sponsorName08
            sponsorImage08
            sponsorUrl08
            sponsorOrder08
            sponsorName09
            sponsorImage09
            sponsorUrl09
            sponsorOrder09
            sponsorName10
            sponsorImage10
            sponsorUrl10
            sponsorOrder10
            sponsorName11
            sponsorImage11
            sponsorUrl11
            sponsorOrder11
            sponsorName12
            sponsorImage12
            sponsorUrl12
            sponsorOrder12
            sponsorName13
            sponsorImage13
            sponsorUrl13
            sponsorOrder13
            sponsorName14
            sponsorImage14
            sponsorUrl14
            sponsorOrder14
            sponsorName15
            sponsorImage15
            sponsorUrl15
            sponsorOrder15
            sponsorName16
            sponsorImage16
            sponsorUrl16
            sponsorOrder16
            sponsorName17
            sponsorImage17
            sponsorUrl17
            sponsorOrder17
            sponsorName18
            sponsorImage18
            sponsorUrl18
            sponsorOrder18
            sponsorName19
            sponsorImage19
            sponsorUrl19
            sponsorOrder19
            sponsorName20
            sponsorImage20
            sponsorUrl20
            sponsorOrder20
            sponsorName21
            sponsorImage21
            sponsorUrl21
            sponsorOrder21
            sponsorName22
            sponsorImage22
            sponsorUrl22
            sponsorOrder22
            sponsorName23
            sponsorImage23
            sponsorUrl23
            sponsorOrder23
            sponsorName24
            sponsorImage24
            sponsorUrl24
            sponsorOrder24
            sponsorName25
            sponsorImage25
            sponsorUrl25
            sponsorOrder25
            sponsorName26
            sponsorImage26
            sponsorUrl26
            sponsorOrder26
            sponsorName27
            sponsorImage27
            sponsorUrl27
            sponsorOrder27
            sponsorName28
            sponsorImage28
            sponsorUrl28
            sponsorOrder28
            sponsorName29
            sponsorImage29
            sponsorUrl29
            sponsorOrder29
            sponsorName30
            sponsorImage30
            sponsorUrl30
            sponsorOrder30
            sponsorName31
            sponsorImage31
            sponsorUrl31
            sponsorOrder31
            sponsorName32
            sponsorImage32
            sponsorUrl32
            sponsorOrder32
            sponsorName33
            sponsorImage33
            sponsorUrl33
            sponsorOrder33
            sponsorName34
            sponsorImage34
            sponsorUrl34
            sponsorOrder34
            sponsorName35
            sponsorImage35
            sponsorUrl35
            sponsorOrder35
            sponsorName36
            sponsorImage36
            sponsorUrl36
            sponsorOrder36
            sponsorName37
            sponsorImage37
            sponsorUrl37
            sponsorOrder37
            sponsorName38
            sponsorImage38
            sponsorUrl38
            sponsorOrder38
            sponsorName39
            sponsorImage39
            sponsorUrl39
            sponsorOrder39
            sponsorName40
            sponsorImage40
            sponsorUrl40
            sponsorOrder40
            sponsorName41
            sponsorImage41
            sponsorUrl41
            sponsorOrder41
            sponsorName42
            sponsorImage42
            sponsorUrl42
            sponsorOrder42
            sponsorName43
            sponsorImage43
            sponsorUrl43
            sponsorOrder43
            sponsorName44
            sponsorImage44
            sponsorUrl44
            sponsorOrder44
            sponsorName45
            sponsorImage45
            sponsorUrl45
            sponsorOrder45
            sponsorName46
            sponsorImage46
            sponsorUrl46
            sponsorOrder46
            sponsorName47
            sponsorImage47
            sponsorUrl47
            sponsorOrder47
            sponsorName48
            sponsorImage48
            sponsorUrl48
            sponsorOrder48
            sponsorName49
            sponsorImage49
            sponsorUrl49
            sponsorOrder49
            sponsorName50
            sponsorImage50
            sponsorUrl50
            sponsorOrder50
          }
          html
    }
  }
`

const Sponsors = props => {
  // Get sponsors
  //const sponsorArr = [];
  //sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage01, name: props.data.markdownRemark.frontmatter.sponsorName01, link: props.data.markdownRemark.frontmatter.sponsorUrl01} );
  //sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage02, name: props.data.markdownRemark.frontmatter.sponsorName02, link: props.data.markdownRemark.frontmatter.sponsorUrl02} );
  //sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage03, name: props.data.markdownRemark.frontmatter.sponsorName03, link: props.data.markdownRemark.frontmatter.sponsorUrl03} );
  //sponsorArr.push({ url: props.data.markdownRemark.frontmatter.sponsorImage04, name: props.data.markdownRemark.frontmatter.sponsorName04, link: props.data.markdownRemark.frontmatter.sponsorUrl04} );
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage01);
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage02);
  // holeArr.push(props.data.markdownRemark.frontmatter.sponsorImage03);

  // Group sponsor attributes together
  const sponsorArr = [];
  const k = "props.data.markdownRemark.frontmatter.";
  for(let i = 1; i < 51; i++) {
    if(i < 10) {
      i = "0" + i;
    }
    const sponsorName = "sponsorName" + i;
    const sponsorImg = "sponsorImage" + i;
    const sponsorLink = "sponsorUrl" + i;
    const sponsorOrder = "sponsorOrder" + i;
    const propDataNameString = k + sponsorName;
    const propDataImgString = k + sponsorImg;
    const propDataLinkString = k + sponsorLink;
    const propDataOrderString = k + sponsorOrder;
    // returns img url from graphql:
    const evalPropNameData = eval(propDataNameString);
    const evalPropImgData = eval(propDataImgString);
    const evalPropLinkData = eval(propDataLinkString);
    let evalPropOrderData = eval(propDataOrderString);

    // if order field is empty set to 99
    if(!evalPropOrderData) {
      evalPropOrderData = 99;
    }

    //if(evalPropNameData || evalPropImgData || evalPropLinkData) {
      if(evalPropImgData) {
      sponsorArr.push({order: evalPropOrderData, name: evalPropNameData, thumbnail: cloudinaryUrlTileImage(evalPropImgData), url: cloudinaryUrlImageView(evalPropImgData), link: evalPropLinkData} );
    }
  }
  // sort array by order value
  sponsorArr.sort((a,b) => a.order - b.order);

  const SponsorHero = props => {
    let heroImg;
    if(props.heroImg) {
      let urlHeroImg = props.heroImg;
      heroImg = cloudinaryHeroUrl(urlHeroImg)

      return (
        <div className="course-hero" style={{ height: '360px', backgroundImage: `url(${heroImg})` }}>
          <div className="course-hero-title">{props.courseName}</div>
        </div>
      )
    } else return (<></>)
  }

  const SponsorsDescription = props => {
    return (
      <div className="course-info">
        {/* <p>{props.descrip}</p> */}
        <div className="" dangerouslySetInnerHTML={{__html: props.descripBody}}></div>
      </div>
    )
  }

  const sponsorPageHeroImageURL = props.data.markdownRemark.frontmatter.sponsorsPageHeroImage;
  const sponsorPageHeroTitle = props.data.markdownRemark.frontmatter.sponsorsPageHeroTitle;

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <div className="course-page-content">
        <SEO title="Sponsors" />
        <SponsorHero heroImg={sponsorPageHeroImageURL} courseName={sponsorPageHeroTitle} />
        <div className="course-page-text">
          <SponsorsDescription descripBody={props.data.markdownRemark.html} />
        </div>
        <MuiThemeProvider>
          <div className="caddy-guide-container" >
            {/* <h1 style={{textAlign: "center"}}>Sponsors</h1> */}
            { Array.isArray(sponsorArr) && sponsorArr.length ? <App imagesArray={sponsorArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>}
            {/* { Array.isArray(sortedArr) && sortedArr.length ? <App courseHoleImages={holeArr} /> : <p style={{textAlign: "center"}}>Coming soon...</p>} */}
          </div>
        </MuiThemeProvider>
      </div>
    </Layout>
  )
};

export default Sponsors;
