import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./Landingpage.css"


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
					<p className="about">I am a Full Stack Engineer, graduated May 2020 with a degree in Computer Science from <a href="https://depauw.edu/">DePauw University</a>. I am currently working at a start-up in Philadelphia, PA.</p>
				</Jumbotron>
			</Row>
			<Row>
				 <Button href="mailTo:daniyalsaqib9@gmail.com" className = "btnContact" size="" variant="">Contact Me</Button>
			</Row>
		</Col>
	</Row>




)


export default Landingpage