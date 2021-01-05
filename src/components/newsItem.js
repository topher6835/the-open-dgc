import React from "react"

const NewsItem = (props) => {
  let newsHtml;
  let newsIdElement;

  function targetBlankLinks() {
    const aPattern = /<a\s+/g;

    newsHtml = props.html.replace(aPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
  }
  function formatId() {
    // Remove special characters and replace spaces with dashes to create ID name
    const spCharPattern = /[^a-zA-Z ]/g;
    let titleToId = props.title;
    newsIdElement = titleToId.replace(spCharPattern, "")
    newsIdElement = newsIdElement.replace(/\s+/g, '-').toLowerCase();
  }

  return (
    <>
      {targetBlankLinks(), formatId()}
      <li className="news-item" id={newsIdElement}>
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
