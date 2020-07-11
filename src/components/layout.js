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
import Landingpage from "./LandingPage/landingPage.js"
import LeftBar from "./LeftBar/leftBar"
import Rightbar from "./RightBar/rightBar"
import About from "./About/about"

 
 const size93 = 
 {
    height: '93vh'
 }



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

      
    </Container>  



    )}
  />
)

export default Layout
