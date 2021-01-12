import React from "react"

const NewsItemCompact = (props) => {
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
      {/* <div className="overflow-shadow2"></div> */}
      <li className="news-item news-item-compact" id={newsIdElement}>  {/* news-item news-item-compact */}
        <span className="news-item-header news-item-header-compact">  {/* news-item-header news-item-header-compact */}
          <h1 className="news-item-headline">{props.title}</h1>
          <p className="news-post-date">{props.date}</p>
        </span>
        <div
          className="news-item-html news-item-html-compact"
          dangerouslySetInnerHTML={{ __html: newsHtml }}
        />  {/* news-item-html news-item-html-compact */}
        
      </li>
      
    </>
  )
}

export default NewsItemCompact;
