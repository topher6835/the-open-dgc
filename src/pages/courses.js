import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import TopBanner from "../components/topBanner"
import grassImg from "../../content/images/grass.jpg"

const CoursesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: id, order: DESC }
        filter: { frontmatter: { templateKey: { eq: "course-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              displayTitle
              site
              location
              date(formatString: "MMMM DD YYYY")
              displayTitle
              coursesImage
              coursesDescription
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const renderCourses = () => {
    return data.allMarkdownRemark.edges.map(edge => {
      let courseImg;
      if(edge.node.frontmatter.coursesImage) {
        courseImg = edge.node.frontmatter.coursesImage;
      } else {
        courseImg = grassImg;
      }
      return (
        <div className="gallery_tile course-tile">
            <div className="course-tile-inner">
              {" "}
              <Link to={`/course/${edge.node.fields.slug}`}>
                <div className="course-tile-background-image" style={{ backgroundImage: `url(${courseImg})` }} >
                  <div className="course-tile-text">
                    <p className="course-tile-text-title">{edge.node.frontmatter.displayTitle}</p>
                  </div>
                </div>
                <div className="course-tile-description">
                  <div className="overflow-shadow"></div>
                  <p style={{float: 'right'}}>{edge.node.frontmatter.location}</p>
                  <br/>
                  <p>
                    {edge.node.frontmatter.coursesDescription}
                  </p>
                </div>
              </Link>
            </div>
        </div>
      )
    })
  }

  return (
    <Layout>
      <TopBanner />
      <div className="courses-container">
        <div className="gallery-container-outer course-gallery-container-outer">
          <div className="gallery-container">
            <div className="gallery-main">{renderCourses()}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage
