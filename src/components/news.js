import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import NewsItem from './newsItem';

const NewsComponent = () => {
    //date(formatString: "MMMM DD YYYY")
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news-post"}}}, sort: {fields: frontmatter___dateNewsFormat, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            title
                            dateNewsFormat(formatString: "MMMM DD YYYY")
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
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        const { html } = edge.node;
                        return (
                            <NewsItem html={html} title={edge.node.frontmatter.title} date={edge.node.frontmatter.dateNewsFormat} key={i} />
                        )
                    })}
                </ol>
            </div>
        </div>
    )
    
    }

export default NewsComponent;