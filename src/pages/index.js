import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/card.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Selected Works</h1>
    <div style={{display: `flex`}}>
      <figure className="card">
        <h2 style={{textAlign: `center`}}>Overview / Title of Work</h2>  
        <figcaption>
          <p>In here I would write an overview of the project. A few lines about the job or something I dunno.</p>
        </figcaption>
      </figure>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft: `0.45rem` }}>
        <Image />
      </div>

    </div>

  </Layout>
)

export default IndexPage
