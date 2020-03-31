import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AlertMain from '../components/alertMain'
import Image from "../components/homeFullScreenImage"
import NewsComponent from '../components/news'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <AlertMain />
      <Image />
      <NewsComponent />
    </Layout>
  )
}

export default IndexPage;
