import React from "react"

import NewsComponent from '../components/news'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/homeFullScreenImage"
// import imageMain from "../images/The Open_web-home page.jpg"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Image />
      {/* <img className="image-main" src={imageMain} alt="the open disc golf championship" /> */}
      <NewsComponent />
    </Layout>
  )
}

export default IndexPage;
