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
        <div className="news-section" id="news-component">
            <div className="news-main" >
                <h1 className="news-title">News</h1>
                <ol className="news-list" >
                    {data.allMarkdownRemark.edges.map((edge) => {
                        const { html } = edge.node;
                        return (
                            <li className="news-item">
                                <span className="news-item-header">
                                    <h1 className="news-item-headline">{edge.node.frontmatter.title}</h1>
                                    <p className="news-post-date">{edge.node.frontmatter.date}</p>
                                </span>
                                {/* <p>{edge.node.excerpt}</p> */}
                                <div className="news-item-html" dangerouslySetInnerHTML={{ __html: html }} />
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
    
    }

export default NewsComponent;