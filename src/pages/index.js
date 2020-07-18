import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Slide decks for talks by Cyryl Płotnicki" />
    <h1>Slide decks for talks by Cyryl Płotnicki</h1>>
    <Link to="/hello/">Hello</Link> <br />
  </Layout>
)

export default IndexPage
