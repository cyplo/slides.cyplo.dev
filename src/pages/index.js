import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Link to="/rust2019/">Intro to Rust - 2019</Link> <br />
    <Link to="/code-reading/">Workshop on code reading</Link> <br />
  </Layout>
)

export default IndexPage
