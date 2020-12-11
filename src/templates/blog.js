import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
      html
      htmlAst
    }
  }
`

const Blog = props => {
  return (
    <Layout>
        <Link to="/blog">BACK TO BLOG</Link>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        {/* <p>{props.data.markdownRemark.frontmatter.text1}</p>
        <p>{props.data.markdownRemark.frontmatter.text2}</p> */}
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.frontmatter.text2 }}></div>
        {/* <img src={props.data.markdownRemark.frontmatter.image} /> */}
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default Blog
