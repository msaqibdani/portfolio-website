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

  	<Container fluid>
  		<Row>
  			<Col>

			  	<Nav >
				  	<Nav.Item>
				  		<Nav.Link href={resume} className = "spaceRight justifyContentEnd" eventKey = "link-1"> Resume </Nav.Link>
				  	</Nav.Item>

			  	</Nav>

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
