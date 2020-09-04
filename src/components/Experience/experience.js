import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './experience.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import Card from 'react-bootstrap/Card'


const topPadding = 
{
	paddingTop: '20vh'
}




const Experience = ({props}) =>
(
	<Row style={topPadding}>
		<Row style={{margin: '10vw'}}>
			<Col>
				<h1 style={{color:'#66FCF1'}}>Experience</h1>
			</Col>
		</Row>

		<Row>
			<Col>
				<Card className = "CardHeader" style={{ width: '25rem' }}>
					<Card.Body className="CardBody">
					<Card.Title> <a style={{color:'#66FCF1'}}>ForMotiv</a> <small style={{marginLeft: '8vw', fontSize: '14px'}}> June 2020 - Present </small>
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Full Stack Software Engineer</Card.Subtitle>
					<Card.Text>
						<ul>
							<li> Improved the efficiency of data transfer by refactoring of ForMotiv’s API, written in Javascript </li>
							<li> Designing and developing data mining techniques to preprocess data, in R, to apply machine learning algorithms </li>
							<li> Developed and designed  web-applications in React, Angular and other popular frameworks</li>
							<li> Working with clients’ engineering teams to troubleshoot integration and implementation of ForMotiv’s API </li>
						</ul>
					</Card.Text>
	
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</Row>
)

export default Experience