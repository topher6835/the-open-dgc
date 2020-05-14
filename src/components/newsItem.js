import React from "react"

const NewsItem = (props) => {
  return (
    <li className="news-item">
      <span className="news-item-header">
        <h1 className="news-item-headline">{props.title}</h1>
        <p className="news-post-date">{props.date}</p>
      </span>
      <div
        className="news-item-html"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </li>
  )
}

export default NewsItem;
