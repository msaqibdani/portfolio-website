import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./landingPage.css"
import resume from "./../../images/Resume-v1.pdf"


import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



var current = 0;
var greetings = ['Hello', 'Salaam', 'Bonjour', 'Zdravstvuyte', 'Nǐn hǎo', 'Konnichiwa', 'Guten Tag', 'Olá', 'Namaste', 'Goddag', 'Shikamoo']

const print = ({greeting}) =>
{
	current+=1;
	document.getElementById('greeting').innerHTML = greetings[current];
	if (current === greetings.length-1)
	{
		current = -1;
	}

};



const Landingpage = ({ props }) => (


	<Row>
		<Col>
			<Row>
				<Jumbotron fluid className="backgroundSection">
					<p className="tagLine"> <span id="greeting" onMouseOver = {print} >Hello</span>, my name is</p>
					<p className="name">DANIYAL SAQIB</p>
					<p className="about">I am a Full Stack Software Engineer currently working at a start-up <a href="https://formotiv.com/">ForMotiv</a> in Philadelphia, PA. Few of the technologies I have been working at ForMotiv are:</p>
					<Row>
						<Col className="technologies" md={3} xs={3} sm={3}>
							<ul>
								<li>Python</li>
								<li>Javascript</li>
								<li>HTML</li>
								<li>CSS</li>
							</ul>
						</Col>
						<Col className="technologies" md={3} xs={3} sm={3}>
							<ul>
								<li>Django</li>
								<li>Flask</li>
								<li>ReactJS</li>
								<li>NodeJS</li>
							</ul>
						</Col>
					</Row>
				</Jumbotron>
			</Row>
			<Row>
				 <Button href={resume} className = "btnContact" variant="">Resume</Button>
			</Row>
		</Col>
	</Row>




)


export default Landingpage