import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './experience.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const topPadding = 
{
	marginTop: '25vh',
	marginBottom: '50vh'
}


const Experience = ({props}) =>
(

	<Row style={topPadding}>
        <h3>EXPERIENCE</h3>
		<Card className="cardBackground">
			<Card.Body>
				<Card.Title className="cardTitle">ForMotiv <span className="time">June 2020 - Present</span></Card.Title>
				<Card.Subtitle className="cardSubtitle mb-2">Full Stack Software Engineer</Card.Subtitle>
    			<Card.Text className="cardText">
    				<ul className="ul">
    					<li className="li"> Improved the efficiency of data transfer by refactoring of ForMotiv’s API, written in Javascript</li>
    					<li className="li"> Developing data mining techniques to retrieve data from MongoDB and preprocess data in R/Python</li>
    					<li className="li"> Developed and designed single and multi page web-applications in React and Angular, using react-bootstrap, material-ui and other CSS libraries to design and write integration manuals in different frontend frameworks</li>
    					<li className="li"> Working with clients’ engineering teams to troubleshoot integration and implementation of ForMotiv’s API</li>
    				</ul>
    			</Card.Text>
    			</Card.Body>
    	</Card>
	</Row>
)

export default Experience



