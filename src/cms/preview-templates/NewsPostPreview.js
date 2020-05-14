import React from 'react'
// import PropTypes from 'prop-types'
//import { NewsItem } from '../components/newsItem'

import "../../styles/layout.css"

const NewsPostPreview = ({ entry, widgetFor }) => {
//   const tags = entry.getIn(['data', 'tags'])
  return (
    <ol>
        <li className="news-item">
        <span className="news-item-header">
            <h1 className="news-item-headline">{entry.getIn(['data', 'title'])}</h1>
            <p className="news-post-date">{entry.getIn(['data', 'date'])}</p>
        </span>
        <div
            className="news-item-html"
            dangerouslySetInnerHTML={{ __html: widgetFor('body') }}
        />
        </li>
    </ol>

    // <NewsItem
    //   html={widgetFor('body')}
    //   title={entry.getIn(['data', 'title'])}
    //   date={entry.getIn(['data', 'date'])}
    // />
  )
}

// NewsPostPreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default NewsPostPreview
