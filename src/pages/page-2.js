import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Page two" />
  </Layout>
)

export default SecondPage
