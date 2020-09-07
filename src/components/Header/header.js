import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './header.css'
import resume_106 from './Resume-v1.0.6.pdf'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Header = ({}) => (
  <header>

  	<Container fluid>
  		<Row>
  			<Col>

			  	<Nav >
				  	<Nav.Item>
				  		<Nav.Link href={resume_106} className = "spaceRight justifyContentEnd" eventKey = "link-1"> Resume </Nav.Link>
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
