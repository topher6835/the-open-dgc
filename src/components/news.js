import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const NewsComponent = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        excerpt(format: PLAIN)
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
                    return (
                        <li className="news-item">
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <p>{edge.node.excerpt}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
    
    }

export default NewsComponent;