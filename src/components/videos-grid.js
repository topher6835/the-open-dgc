import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { cloudinaryUrlSocialShareImagePreview, youtubeThumb} from "./utils";
import grassImg from "../../content/images/grass.jpg";

const VideosGrid = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___dateVideoFormat, order: DESC },
        filter: { frontmatter: { templateKey: { eq: "video-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              videoID
              videoURL
              dateVideoFormat
              videoThumbImg
              videoAuthor
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  const filterCourses = () => {
    return data.allMarkdownRemark.edges.map((edge, i) => {
    //   if ((props.page === "event-courses" && edge.node.frontmatter.eventCourse) || (props.page === "course-design" && edge.node.frontmatter.courseDesign)) {
    //     return renderCourses(edge, i)
    //   }
      return renderCourses(edge, i)
    })
  }

  const renderCourses = (edge, i) => {
    let courseImg
    if (edge.node.frontmatter.videoThumbImg) {
      courseImg = edge.node.frontmatter.videoThumbImg
    } else if(edge.node.frontmatter.videoID) {
        courseImg = youtubeThumb(edge.node.frontmatter.videoID);
    } else {
        courseImg = grassImg
    }
    return (
      <div className="gallery_tile course-tile" key={i}>
        <div className="course-tile-inner">
          {" "}
          <Link to={`/videos/${edge.node.fields.slug}`}>
            <div
              className="course-tile-background-image"
              style={{ backgroundImage: `url(${courseImg})` }}
            >
              {/* <div className="course-tile-text">
                <p className="course-tile-text-title">
                  {edge.node.frontmatter.coursesPageTitle}
                </p>
              </div> */}
            </div>
              <p>Title or brief description goes here: {edge.node.frontmatter.title} </p>
            {/* <div className="course-tile-description">
              <div className="overflow-shadow"></div>
              <p style={{ float: "right" }}>{edge.node.frontmatter.location}</p>
              <br />
              <p>{edge.node.frontmatter.coursesDescription}</p>
            </div> */}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="courses-container">
      <div className="gallery-container-outer course-gallery-container-outer">
        <div className="gallery-container">
          <div className="gallery-main">{filterCourses()}</div>
        </div>
      </div>
    </div>
  )
}

export default VideosGrid;
