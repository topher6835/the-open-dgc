import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import grassImg from "../../content/images/grass.jpg";

const CoursesGrid = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC },
        filter: { frontmatter: { templateKey: { eq: "course-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              coursesPageTitle
              coursesImage
              coursesDescription
              location
              eventCourse
              courseDesign
              date(formatString: "MMMM DD YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const filterCourses = () => {
    return data.allMarkdownRemark.edges.map((edge, i) => {
      if ((props.page === "event-courses" && edge.node.frontmatter.eventCourse) || (props.page === "course-design" && edge.node.frontmatter.courseDesign)) {
        return renderCourses(edge, i)
      }
    })
  }

  const renderCourses = (edge, i) => {
    let courseImg
    if (edge.node.frontmatter.coursesImage) {
      courseImg = edge.node.frontmatter.coursesImage
    } else {
      courseImg = grassImg
    }
    return (
      <div className="gallery_tile course-tile" key={i}>
        <div className="course-tile-inner">
          {" "}
          <Link to={`/course/${edge.node.fields.slug}`}>
            <div
              className="course-tile-background-image"
              style={{ backgroundImage: `url(${courseImg})` }}
            >
              <div className="course-tile-text">
                <p className="course-tile-text-title">
                  {edge.node.frontmatter.coursesPageTitle}
                </p>
              </div>
            </div>
            <div className="course-tile-description">
              <div className="overflow-shadow"></div>
              <p style={{ float: "right" }}>{edge.node.frontmatter.location}</p>
              <br />
              <p>{edge.node.frontmatter.coursesDescription}</p>
            </div>
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

export default CoursesGrid;
