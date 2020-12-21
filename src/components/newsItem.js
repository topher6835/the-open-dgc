import React from "react"

const NewsItem = (props) => {

  let newsHtml;

  function targetBlankLinks() {
    const aPattern = /<a /g;

    newsHtml = props.html.replace(aPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
  }

  return (
    <>
      {targetBlankLinks()}
      <li className="news-item">
        <span className="news-item-header">
          <h1 className="news-item-headline">{props.title}</h1>
          <p className="news-post-date">{props.date}</p>
        </span>
        <div
          className="news-item-html"
          dangerouslySetInnerHTML={{ __html: newsHtml }}
        />
      </li>
    </>
  )
}

export default NewsItem;
