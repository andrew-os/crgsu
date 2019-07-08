import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"

import styled from "styled-components"

import "./nav.css"

const Navigation = styled.header`
width: 100%;
z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;
height: 140px;
margin-bottom: 60px;

.logo a {
  padding-top: 33px;
  display: flex;
  flex-direction: column;
  clear: both;
  padding-bottom: 30px;
  text-decoration: none;

  p {
    width: 500px;
    display: block;
  }
  em {
    font-size: 0.5em;
    float: left;
    display: block;
    img {
      display: inline-block;
      margin-top: 5px;
      width: 15px;
      float: left;
    }
    .letterhead {
      display: inline-block;
      line-height: 260%;
      float: left;
    }
  }
}

a {
  color: #222;
  opacity: 0.55;
  transition: all 0.6s;
  color: #222;
  font-size: 1em;
}
a:hover {
  opacity: 1;
}
.fa-bars {
  display: none;
  color: #222;
  font-size: 2rem;
}
nav {
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin: 0 15px;
    justify-content: space-between;
    font-size: 1em;
  }
  a {
    font-size: 1em;
    text-decoration: none;
    .active {
      color: tomato;
    }
  }
  a.active {
    color: #222;
  }
}

@media only screen and (min-width: 800px) {
  padding: 0px;
  flex-direction: column;
  height: auto;
  margin-bottom: 0;

  nav{
    ul{
      flex-direction: column;
    }
  }
}
@media only screen and (max-width: 799px) {
  height: auto;
  min-height: 50px;
  display: block;
  position: relative;
  
  .logo {
    width: 100%;
    display: block;
    padding-top: 20px;
    margin: 0px;
    margin-left: -5px;
    a {
      padding: 20px 0px;
    }
  }
  .fa-bars {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #fff;
  }
  ul.collapsed {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    overflow: hidden;
    max-height: 0;
    -moz-transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    transition-duration: 0.4s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    &.is-expanded {
      overflow: hidden;
      max-height: 700px; /* approximate max height */
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: ease-in;
      -webkit-transition-timing-function: ease-in;
      -o-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }
    li {
      padding: 15px 10px;
      margin: 0px 0px;
      width: 100%;
    }
  }
}
`;

class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {
      collapsed: true,
      isExpanded: false
    }

    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(event){
    event.preventDefault();

    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handleToggle(e){
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  render(){
    const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')
    const { isExpanded} = this.state
    return(
      <Navigation>
          <nav
          className="nav"
          style={{
            background: `black`,
            marginBottom: `1.45rem`,
          }}
        >
        <i
          className="fa fa-bars"
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
        />
          <ul
            className={`collapsed ${isExpanded ? "is-expanded" : " "}`}
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              fontFamily: `B612 Mono, monospace`,
              fontSize: `0.6875rem`,
            }}
          >
            <li className="nav-has-children" style={{ 
                  margin: `0 0 1.32rem`, 
                  listStyle: `none`,
                  color: `#fff`,
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
              <a href="/contact" className="link">Contact</a>
              
              
            </li>
          </ul>
        </nav>
      </Navigation>    
    )
  }
} 





export default Nav
