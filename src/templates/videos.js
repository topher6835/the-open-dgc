import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AlertMain from "../components/alertMain";
import NewsItem from '../components/newsItem';
import TopBanner from "../components/topBanner";
import Video from "../components/video";

import { cloudinaryUrlSocialShareImagePreview, youtubeEmbedUrl } from "../components/utils";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        videoID
        videoURL
        dateVideoFormat(formatString: "MMMM DD YYYY")
        videoThumbImg
        videoAuthor
      }
      fields {
          slug
      }
      excerpt(format: PLAIN)
      html
    }
  }
`

const Videos = props => {

  // Handle social share image.. provided img > video ID > default??
  let socialShareImgPreviewURL = '';
  let socialShareImgPreview;
  let youtubeUrl;

  if(props.data.markdownRemark.frontmatter.videoID) {
    youtubeUrl = youtubeEmbedUrl(props.data.markdownRemark.frontmatter.videoID);
  }

  if(!props.data.markdownRemark.frontmatter.videoThumbImg || typeof props.data.markdownRemark.frontmatter.videoThumbImg !== 'undefined') {
    //want the default image - eliminate SEO image={}
    console.log('do something')
  } else {
    socialShareImgPreview = props.data.markdownRemark.frontmatter.videoThumbImg
    socialShareImgPreviewURL = cloudinaryUrlSocialShareImagePreview(socialShareImgPreview);
  }

  return (
    <Layout>
      {/* {console.log(props.location.pathname)} */}
      <AlertMain />
      <TopBanner />
      <SEO title={props.data.markdownRemark.frontmatter.title} image={socialShareImgPreviewURL} />
        {/* <Link to="/news">BACK TO NEWS</Link> */}
        {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.dateNewsFormat}</p> */}
        {/* <p>{props.data.markdownRemark.frontmatter.text1}</p>
        <p>{props.data.markdownRemark.frontmatter.text2}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.frontmatter.text2 }}></div> */}
        {/* <img src={props.data.markdownRemark.frontmatter.image} /> */}
        {/* <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
        <div className="news-section">  {/* news-section */}
          <div className="news-main">  {/* news-main */}
            <div className="">   {/* news-item-html post-feed-container  post-feed  */}
              <section className="">
              <h3>{props.data.markdownRemark.frontmatter.title}</h3>
                <Video
                  videoSrcURL={youtubeUrl}
                  videoTitle={props.data.markdownRemark.frontmatter.title}
                />
              </section>
            </div>
            {/* Add desciption here */}
            <NewsItem node={props.data.markdownRemark} />
          </div>
        </div>
    </Layout>
  )
}

export default Videos;
