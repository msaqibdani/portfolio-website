import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons" 


import './leftBar.css'


import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEmail } from 'react-icons/fa'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const Leftbar = ({props}) =>
(

	<Row className = "leftMargin">
		<Col>
			<IconContext.Provider value =  {{size: '1.5em', className: "icons-react"}}>
				<div className="spaceBetween">
					<a href="https://github.com/msaqibdani"><FaGithub /></a>
				</div>
				<div className="spaceBetween">
					<a href="https://linkedin.com/in/muhammaddaniyalsaqib"><FaLinkedin /></a>
				</div>
				<div className="spaceBetween">
					<a href="https://linkedin.com/in/muhammaddaniyalsaqib"><FaFacebook /></a>
				</div>
				<div className="spaceBetween">
					<a href="https://linkedin.com/in/muhammaddaniyalsaqib"><FaTwitter /></a>
				</div>
			</IconContext.Provider>
		</Col>
	</Row>
)




export default Leftbar