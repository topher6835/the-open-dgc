import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const NewsComponent = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news-post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM DD YYYY")
                        }
                        excerpt(format: PLAIN)
                        html
                    }
                }
            }
        }
    `)

    return (
        <div className="news-main" >
            <h1>News</h1>
            <ol className="news-list" >
                {data.allMarkdownRemark.edges.map((edge) => {
                    const { html } = edge.node;
                    return (
                        <li className="news-item">
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            {/* <p>{edge.node.excerpt}</p> */}
                            <div className="" dangerouslySetInnerHTML={{ __html: html }} />
                        </li>
                    )
                })}
            </ol>
        </div>
    )
    
    }

export default NewsComponent;