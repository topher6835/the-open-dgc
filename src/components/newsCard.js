import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Tags } from '@tryghost/helpers-gatsby'
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const NewsCard = (props) => {

    let newsHtml;
    let newsIdElement;
    const newsTitle = props.node.frontmatter.title;
    const newsDate = props.node.frontmatter.dateNewsFormat;
    const newsSlug = props.node.fields.slug;

    function targetBlankLinks() {
        const aPattern = /<a\s+/g;
        newsHtml = props.node.html.replace(aPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
    }
    function formatId() {
        // Remove special characters and replace spaces with dashes to create ID name
        const spCharPattern = /[^a-zA-Z ]/g;
        let titleToId = newsTitle;
        newsIdElement = titleToId.replace(spCharPattern, "")
        newsIdElement = newsIdElement.replace(/\s+/g, '-').toLowerCase();
    }

    return (
        <div className="post-card-container">
            <Link to={`/news/${newsSlug}`} className="post-card" id={newsIdElement}>
                <div>
                    {targetBlankLinks(), formatId()}
                    <header className="post-card-header">
                        <h2 className="post-card-title">{newsTitle}</h2>
                        <p className="post-card-date">{newsDate}</p>
                    </header>
                    <section className="post-card-excerpt">
                        <div className="news-item-html news-item-html-compact" dangerouslySetInnerHTML={{ __html: newsHtml }} />

                        <Link  to={"/"}>
                            <div className="post-button">Keep Reading →</div>
                        </Link>
                        <div className="post-card-fade-up" />
                        
                    </section>
                    {/* <footer className="post-card-footer">
                        <div className="post-card-footer-left">
                        </div>
                        <div className="post-card-footer-right">
                        </div>
                    </footer> */}
                </div>
            </Link>
        </div>
    )
}

// NewsCard.propTypes = {
//     post: PropTypes.shape({
//         slug: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         feature_image: PropTypes.string,
//         featured: PropTypes.bool,
//         tags: PropTypes.arrayOf(
//             PropTypes.shape({
//                 name: PropTypes.string,
//             })
//         ),
//         excerpt: PropTypes.string.isRequired,
//         primary_author: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             profile_image: PropTypes.string,
//         }).isRequired,
//     }).isRequired,
// }

export default NewsCard