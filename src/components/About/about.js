import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './about.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const topPadding = 
{
	paddingTop: '5vh'
}

const rightAlighned = 
{
	textAlign: 'right',
	width: '40vw',
	marginLeft: '7vw'
}

const About = ({props}) =>
(
	<Row style={topPadding}>
		<Col>
			<Row>
				<Col md={10}>

					<div style={rightAlighned}> I am a Full Stack Engineer, graduated May 2020 with a degree in Computer Science from 
					DePauw University. I am currently working at a start-up in Philadelphia, PA. </div>

					<div style={rightAlighned} > I am a Full Stack Engineer, graduated May 2020 with a degree in Computer Science from 
					DePauw University. I am currently working at a start-up in Philadelphia, PA. </div>

					<div style={rightAlighned}> I am a Full Stack Engineer, graduated May 2020 with a degree in Computer Science from 
					DePauw University. I am currently working at a start-up in Philadelphia, PA. </div>




				</Col>

				<Col md={2}>
					<div className="headingSection">About</div>
				</Col>
			</Row>
		</Col>
	</Row>
)

export default About