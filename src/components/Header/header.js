import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './header.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const Header = ({}) => (
  <header>

  	<Container fluid>
  		<Row>
  			<Navbar bg="dark" variant="dark" className="justifyContentEnd">
  					<Nav>
  						<Nav.Link className="headerLink" href="#experience">Experience</Nav.Link>
  						<Nav.Link className="headerLink" href="mailto:daniyalsaqib9@gmail.com">Contact</Nav.Link>
					</Nav>
			</Navbar>
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
