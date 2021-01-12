import React from "react";
//import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AlertMain from "../components/alertMain";
import TopBanner from "../components/topBanner";
import NewsComponent from '../components/news';


const NewsPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(sort: {fields: id, order: DESC}, filter: {frontmatter: {templateKey: {eq: "news-post"}}}) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date(formatString: "MMMM DD YYYY")
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <SEO title="News" />
      {/* <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol> */}
      <NewsComponent page="news" />
    </Layout>
  )
}

export default NewsPage;
