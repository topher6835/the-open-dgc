import React from 'react'

import "../../styles/layout.css"
import "../../styles/cmsPreviewStyle.css"

const NewsPostPreview = ({ entry, widgetFor }) => {
  return (
      <ol>
          <li className="news-item">
          <span className="news-item-header">
             <h1 className="news-item-headline">{entry.getIn(['data', 'title'])}</h1>
             <p className="news-post-date">{widgetFor('date')}</p>
          </span>
          <div className="news-item-html">{widgetFor('body')}</div>
          </li>
      </ol>
  )
}

export default NewsPostPreview
