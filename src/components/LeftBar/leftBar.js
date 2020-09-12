import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons" 



import './leftBar.css'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const Leftbar = ({props}) =>
(

	<Row className = "leftMargin">
		<Col>
			<IconContext.Provider value =  {{size: '1.5em', className: "icons-react"}}>
				<div className="spaceBetween">
					<a target="_blank" href="https://github.com/msaqibdani"><FaGithub /></a>
				</div>
				<div className="spaceBetween">
					<a target="_blank" href="https://linkedin.com/in/muhammaddaniyalsaqib"><FaLinkedin /></a>
				</div>
				<div className="spaceBetween">
					<a target="_blank" href="https://www.facebook.com/mdaniyalsaqib"><FaFacebookF /></a>
				</div>
				<div className="spaceBetween">
					<a target="_blank" href="https://twitter.com/msaqibdani"><FaTwitter /></a>
				</div>
				<div className="spaceBetween">
					<a target="_blank" href="https://instagram.com/daniyalsaqib"><FaInstagram /></a>
				</div>
				<div className="spaceBetween">
					<a target="_blank" href="mailto:daniyalsaqib9@gmail.com"><AiOutlineMail/></a>
				</div>
				
			</IconContext.Provider>
		</Col>
	</Row>
)




export default Leftbar