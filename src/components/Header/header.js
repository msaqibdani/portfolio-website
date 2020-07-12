import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './header.css'
import resume from './../../Files/Resume.pdf'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const Header = ({ }) => (
  <header>

  	<div className="justifyContentEnd">

	  	<Nav>
		  	<Nav.Item>
		  		<Nav.Link href={resume} className = "spaceRight" eventKey = "link-1"> Resume </Nav.Link>
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
