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
  			<Navbar className="justifyContentEnd">
  					<Nav>
  						<Nav.Item className="headerLink"><a href="#experience">Experience</a></Nav.Item>
  						<Nav.Item className="headerLink"><a href="mailto:daniyalsaqib9@gmail.com">Contact</a></Nav.Item>
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
