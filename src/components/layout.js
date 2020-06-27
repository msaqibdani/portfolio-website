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
import Navbar from "./navBar"
 

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
        <Col>
        </Col>

         <Col>
        </Col>

         <Col>
        </Col>
      
      </Row>  

    </Container>      

    )}
  />
)

export default Layout
