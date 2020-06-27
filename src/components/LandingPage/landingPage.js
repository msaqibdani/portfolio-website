import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import "./landingPage.css"


import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const LandingPage = ({ }) => (

	<landingPage>

		<Row>
			<Col>

				<Jumbotron fluid className="backgroundSection">
					<p> <span>Hello </span>, my name is</p>
					<h3>DANIYAL SAQIB</h3>
				</Jumbotron>

			</Col>

		</Row>


	</landingPage>


)



LandingPage.propTypes = {
  siteTitle: PropTypes.string,
}

LandingPage.defaultProps = {
  siteTitle: ``,
}

export default LandingPage