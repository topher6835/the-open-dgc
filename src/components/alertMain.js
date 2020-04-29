import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const AlertMain = (props) => {
    const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { templateKey: { eq: "alert-main" } }) {
        frontmatter {
          templateKey
          enabled
          allPages
        }
        html
      }
    }
  `)

  return (
    <div>
      {data.markdownRemark.frontmatter.allPages && data.markdownRemark.frontmatter.enabled
        ? <div className="main-alert markdown-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> 
          : [data.markdownRemark.frontmatter.enabled && props.page == "home" 
            ? <div className="main-alert markdown-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> : <></>] }
    </div>
  )
}

export default AlertMain;