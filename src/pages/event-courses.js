import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoursesGrid from "../components/courses-grid"
import AlertMain from "../components/alertMain"
import TopBanner from "../components/topBanner"

const CoursesPage = () => {
  return (
    <Layout>
      <SEO title="Event Courses" />
      <AlertMain />
      <TopBanner />
      <CoursesGrid page="event-courses" />
    </Layout>
  )
}

export default CoursesPage
