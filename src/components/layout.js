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
import Landingpage from "./LandingPage/Landingpage"

 

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
        <Col md="2">
        </Col>

         <Col md= "8"> 
          <Landingpage />

         </Col>

         <Col md = "2">
        </Col>
      
      </Row>  

    </Container>      

    )}
  />
)

export default Layout
