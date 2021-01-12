import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AlertMain from "../components/alertMain";
import NewsItem from '../components/newsItem';
import TopBanner from "../components/topBanner";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM DD YYYY")
//       }
//       html
//       htmlAst
//     }
//   }
// `
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        dateNewsFormat(formatString: "MMMM DD YYYY")
      }
      fields {
          slug
      }
      excerpt(format: PLAIN)
      html
    }
  }
`

const News = props => {
  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <SEO title={props.data.markdownRemark.frontmatter.title} />
        {/* <Link to="/news">BACK TO NEWS</Link> */}
        {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.dateNewsFormat}</p> */}
        {/* <p>{props.data.markdownRemark.frontmatter.text1}</p>
        <p>{props.data.markdownRemark.frontmatter.text2}</p> */}
        {/* <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.frontmatter.text2 }}></div> */}
        {/* <img src={props.data.markdownRemark.frontmatter.image} /> */}
        {/* <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
        <div className="news-section">
          <div className="news-main">
            <NewsItem node={props.data.markdownRemark} />
          </div>
        </div>
    </Layout>
  )
}

export default News;
