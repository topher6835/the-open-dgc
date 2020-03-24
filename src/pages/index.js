import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeAlert from '../components/homeAlert'
import Image from "../components/homeFullScreenImage"
import NewsComponent from '../components/news'
// import imageMain from "../images/The Open_web-home page.jpg"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <HomeAlert />
      <Image />
      {/* <img className="image-main" src={imageMain} alt="the open disc golf championship" /> */}
      <NewsComponent />
    </Layout>
  )
}

export default IndexPage;
