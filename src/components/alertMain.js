import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const AlertMain = () => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "alert-main" } }) {
        frontmatter {
          templateKey
          title
          date(formatString: "MMMM DD YYYY")
          enabled
          allPages
        }
        html
      }
    }
  `)

  return (
    <div className="home-page-alert">
        {data.markdownRemark.frontmatter.enabled ? <div className="markdown-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html } }></div> : <></> }
    </div>
  )
}

export default AlertMain;