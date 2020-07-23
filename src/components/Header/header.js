import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './header.css'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const justifyContentEnd = 
{
	marginLeft: '68vw',
	
}

const Header = ({ }) => (
  <header>

  	<div style={justifyContentEnd}>

	  	<Nav>
		  	<Nav.Item>
		  		<Nav.Link className = "spaceRight" eventKey = "link-1"> Resume </Nav.Link>
		  	</Nav.Item>

	  	</Nav>

	</div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
