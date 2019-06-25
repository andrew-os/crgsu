/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav";
import "./layout.css"

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
    <>
    <div className="site_header">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav />
    </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2.5rem 1.0875rem 1.45rem`,
          marginLeft: 252,
          minWidth: 275,
        }}
      >
        <main>{children}</main>
        <footer>
        &copy; craig sugden
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
