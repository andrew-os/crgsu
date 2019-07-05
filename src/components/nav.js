import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"

import "./nav.css"

class Nav extends Component{
  constructor(){
    super();

    this.state = {
      collapsed: true,
    }

    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(event){
    event.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render(){
    const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')
    return(
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
                  <li className="menu-has-children">
                    <button className="link-style-btn" onClick={this.showMenu}>
                      Theatres
                    </button>

                      <div className={classDropdownMenu}>
                        <ul className="dropdown">
                          <li>Production Stills</li>
                          <li>Rehearsals</li>
                          <li>Press</li>
                          <li>Headshots</li>
                        </ul>                      
                      </div>



                    
                  
                  </li>
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
             
              Testimonials

            </li>
            <li style={{ 
                margin: 0,
                listStyle: `none`,
                fontWeight: `bold`,
              }}>
              <a href="/contact" class="link">Contact</a>
              
              
            </li>
          </ul>
        </nav>
    )
  }
} 





export default Nav
