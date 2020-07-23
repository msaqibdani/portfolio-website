/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import './layout.css'

import { Container, Row, Col } from "react-bootstrap"

import Header from "./Header/header"
import Landingpage from "./LandingPage/landingPage.js"
import LeftBar from "./LeftBar/leftBar"
import Rightbar from "./RightBar/rightBar"
import About from "./About/about"



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
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
<<<<<<< HEAD
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col md={2} xs={2}>
=======
        <Col md={2} xs={2} sm={2}>
>>>>>>> 87ef9e8ff769aaf1c96b62a7bc524c093d37f98d
          <LeftBar />
        </Col>

         <Col md={8} xs={9} sm={9}> 
          <Landingpage />
         </Col>

         <Col md={2} xs={1} sm={1}>
          <Rightbar />
        </Col>
      </Row>
    </Container>  



    )}
  />
)

export default Layout
