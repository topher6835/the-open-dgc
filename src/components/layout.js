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
          <p>© {new Date().getFullYear()} {data.site.siteMetadata.title}</p>
          <p>Contact: <a href="mailto:theopendgc@nealdambra.com">theopendgc@nealdambra.com</a></p>
        </footer>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
