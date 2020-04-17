import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
import Header from "./nav";
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="content">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header />

      <div className="layout-body">

        <main>
          {children}
        </main>

        <footer>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </footer>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
