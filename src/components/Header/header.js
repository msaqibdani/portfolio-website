import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './header.css'
import resume from './../../Files/Resume.pdf'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Header = ({ }) => (
  <header>

<<<<<<< HEAD
  	<div style={justifyContentEnd}>

	  	<Nav>
		  	<Nav.Item>
		  		<Nav.Link className = "spaceRight" eventKey = "link-1"> Resume </Nav.Link>
		  	</Nav.Item>
=======
  	<Container fluid>
  		<Row>
  			<Col>

			  	<Nav >
				  	<Nav.Item>
				  		<Nav.Link href={resume} className = "spaceRight justifyContentEnd" eventKey = "link-1"> Resume </Nav.Link>
				  	</Nav.Item>

			  	</Nav>
>>>>>>> 87ef9e8ff769aaf1c96b62a7bc524c093d37f98d

			</Col>
		</Row>

	</Container>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
