import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { IconContext } from "react-icons" 
import { FaGithub } from 'react-icons/fa'

import "./ProjectTemplate.css"


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export default function ProjectTemplate (props) {

	function overlyingSheetOver(e) {
		
		e.target.style.opacity = 0;
		
	}

	function overlyingSheetOut(e) {
		
		e.target.style.opacity = 0.6;
		
	}


	return	(
		<Card className="cardBackground cardDimesions">
			<div id="overlyingElement" className="overlying" onMouseOver={overlyingSheetOver} onMouseOut={overlyingSheetOut}>
			</div>
				<Card.Body>
					<Card.Title>{props.cardTitle}
					<IconContext.Provider value= {{size: '1.5em', className: "icons-react github-icon-project"}}>
						<a target="_blank" href={props.projectLink}><FaGithub /></a></IconContext.Provider>
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{props.technologies}</Card.Subtitle>
					<Card.Text className="cardText">{props.cardBody}</Card.Text>
				</Card.Body>

		</Card>
	)

}

