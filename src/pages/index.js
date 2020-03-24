import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeAlert from '../components/homeAlert'
import Image from "../components/homeFullScreenImage"
import NewsComponent from '../components/news'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <HomeAlert />
      <Image />
      <NewsComponent />
    </Layout>
  )
}

export default IndexPage;
