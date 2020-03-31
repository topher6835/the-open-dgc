import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const AlertMain = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
              frontmatter {
                alertheadline
                alertsub
                date(formatString: "MMMM DD YYYY")
              }
            }
          }
    `)

    return (
        <div className="home-page-alert">
            <h1>{data.markdownRemark.frontmatter.alertheadline}</h1>
            <h4>{data.markdownRemark.frontmatter.alertsub}</h4>
        </div>
    )
}

export default AlertMain;