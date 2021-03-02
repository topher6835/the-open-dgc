import React from "react"

const NewsItem = (props) => {
  let newsHtml;
  let newsIdElement;
  const newsTitle = props.node.frontmatter.title;
  const newsDate = props.node.frontmatter.dateNewsFormat;
  //const newsSlug = props.node.fields.slug;

  // function targetBlankLinks() {
  //   const aPattern = /<a\s+/g;
  //   newsHtml = props.node.html.replace(aPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
  // }
  function targetBlankLinks() {
    // External links in markdown should open in a new tab NOT internal links
    // regex - anchor tag not containg a relative path... !(href="/path")
    const nonRelativePathTargetPattern = /<a\s+(?!.?href="\/)/g;
    //const aPattern = /<a\s+/g;
    newsHtml = props.node.html.replace(nonRelativePathTargetPattern, "<a target=\"_blank\" rel=\"noopener noreferrer\" ");
  }

  function formatId() {
    // Remove special characters and replace spaces with dashes to create ID name
    const spCharPattern = /[^a-zA-Z ]/g;
    let titleToId = newsTitle;
    newsIdElement = titleToId.replace(spCharPattern, "")
    newsIdElement = newsIdElement.replace(/\s+/g, '-').toLowerCase();
  }

  return (
    <>
      {targetBlankLinks(), formatId()}
      <li className="news-item" id={newsIdElement}>
        <span className="news-item-header">
          <h1 className="news-item-headline">{newsTitle}</h1>
          <p className="news-post-date">{newsDate}</p>
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
