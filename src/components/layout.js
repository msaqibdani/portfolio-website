/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header/header"
import LandingPage from "./LandingPage/landingPage"

 

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      
    <Container fluid>

      <Row>
        <Header />
      </Row>
        
      <Row>
        <Col md="1">
        </Col>

         <Col md= "10">

          <LandingPage />

        </Col>

         <Col md = "1">
        </Col>
      
      </Row>  

    </Container>      

    )}
  />
)

export default Layout
