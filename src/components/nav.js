import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./nav.css"

const Nav = () => (
  <nav
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <ul
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        fontFamily: `B612 Mono, monospace`,
        fontSize: `0.6875rem`,
      }}
    >
      <li className="nav-has-children" style={{ 
            margin: `0 0 1.32rem`, 
            listStyle: `none`,
            color: `#222222`,
            fontWeight: `bold`,
        
        }}>
        Portfolios

        <ul className="list-unstyled">
            <li>Screen</li>
            <li>Theatres</li>
            <li>Commercial</li>
            <li>Music</li>
            <li>Street</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Clients</li>
        </ul>
      </li>
      <li style={{ 
          margin: 0,
          listStyle: `none`,
          margin: `0 0 1.32rem`,
          fontWeight: `bold`,
         }}>
        <Link
          to="/"
          style={{
            color: `#222222`,
            textDecoration: `none`,
          }}
        >
        Testimonials
        </Link>
      </li>
      <li style={{ 
          margin: 0,
          listStyle: `none`,
          fontWeight: `bold`,
         }}>
        <Link
          to="/contact"
          style={{
            color: `#222222`,
            textDecoration: `none`,
          }}
        >
        Contact
        </Link>
      </li>
    </ul>
  </nav>
)



export default Nav
