import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesGrid from "../components/courses-grid"
import AlertMain from "../components/alertMain"
import TopBanner from "../components/topBanner"

const CoursesPage = () => {
  return (
    <Layout>
      <SEO title="Course Design" />
      <AlertMain />
      <TopBanner />
      <CoursesGrid page="course-design" />
    </Layout>
  )
}

export default CoursesPage
