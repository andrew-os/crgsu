import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Grid from "../components/grid"
import SEO from "../components/seo"

import "../components/card.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Selected Works</h1>

    <Grid />
  </Layout>
)

export default IndexPage
