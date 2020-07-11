import React from "react"
import './index.css'
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import './index.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
  </Layout>
)

export default IndexPage
