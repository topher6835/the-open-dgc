import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import NewsItem from './newsItem';
//import NewsItemCompact from './newsItemCompact';
import NewsCard from './newsCard';

const NewsComponent = (props) => {
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
                        fields {
                            slug
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
                <h3 className="news-banner">News</h3>

                <div className="post-feed-container">
                    <section className="post-feed">
                        <ol className="news-list" >
                            {data.allMarkdownRemark.edges.map((edge, i) => {
                                const { html } = edge.node;
                                return (
                                    <>
                                        {props.page == "home" ? <NewsCard node={edge.node} key={i} /> : <NewsItem node={edge.node} key={i} /> }
                                    </>
                                )
                            })}
                        </ol>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default NewsComponent;
