import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Muhammad Daniyal Saqib" keywords={[`gatsby`, `react`, `bootstrap`]} />
  </Layout>
)

export default IndexPage
