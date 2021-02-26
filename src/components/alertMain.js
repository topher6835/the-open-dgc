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

  let alertHtml;

  function targetBlankLinks() {
    // External links in markdown should open in a new tab NOT internal links
    // regex - anchor tag not containg a relative path... !(href="/path")
    //const nonRelativePathTargetPattern = /<a\s+(?!.*href="\/)/g;
    const nonRelativePathTargetPattern = /<a\s+(?!.?href="\/)/g;
    //const aPattern = /<a\s+/g;

    console.log(data.markdownRemark.html)
    alertHtml = data.markdownRemark.html.replace(nonRelativePathTargetPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
    console.log(alertHtml)
  }

  return (
    <div key={"alert"}>
      {targetBlankLinks()}
      {data.markdownRemark.frontmatter.allPages && data.markdownRemark.frontmatter.enabled
      ? <div className="main-alert markdown-body" dangerouslySetInnerHTML={{ __html: alertHtml }} key={"alert"}></div>
          : [data.markdownRemark.frontmatter.enabled && props.page == "home" 
          ? <div className="main-alert markdown-body" dangerouslySetInnerHTML={{ __html: alertHtml }} key={"alert"}></div> : <div key={"alert"}></div>] }
    </div>
  )
}

export default AlertMain;