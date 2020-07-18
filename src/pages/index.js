import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Link to="/hello/">Hello</Link> <br />
    <Link to="/hello-copy/">Hello copy</Link> <br />
  </Layout>
)

export default IndexPage
