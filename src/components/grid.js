import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './grid.css'

const Grid = () => (
	<StaticQuery
		query={graphql`
			query allimgQuery {
			  source: allFile(filter: { relativeDirectory: { eq: "grid" } }){
				edges {
				  node {
					childImageSharp {
					  fluid(maxWidth: 660) {
						...GatsbyImageSharpFluid
					  }
					}
				  }
				}
			  }
			}
		  `}

		  render={data => (
			  
			  <div className="gallery">
			  {data.source.edges.map(({ node }, i) => (
				<div className={`item ${i}`}>
				  <Img key={i} fluid={node.childImageSharp.fluid} />
	
				</div>
			))}
		  </div>
		  )}
		/>
	  )	  

export default Grid






