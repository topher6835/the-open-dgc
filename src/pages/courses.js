import React from "react";

import Layout from "../components/layout";
import CoursesGrid from "../components/courses-grid";
import AlertMain from '../components/alertMain';
import TopBanner from "../components/topBanner";

const CoursesPage = () => {

  return (
    <Layout>
      <AlertMain />
      <TopBanner />
      <CoursesGrid />
    </Layout>
  )
}

export default CoursesPage;
