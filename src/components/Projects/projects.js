import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ProjectTemplate from "./ProjectTemplate.js"
import "./projects.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export default function Projects(props)
{
	var housingPricesPrediction = {
		title: "Used feature engineering and other techniques to preprocess data set and apply algorithms, such as GBR, to make 91% accurate predictions.",
		link: "https://github.com/msaqibdani/HousePricingPrediction"
	}
	var calendarTime = {
		title: "Developed an Django application that connects with Google Calendar API to display free times in your calendar in a formatted string defined by user.",
		link: "https://github.com/msaqibdani/GoogleCalendar"
	}

	var portfolioWebsite = {
		title: "Developed a Single Page Web Application in React and Gatsby. Used react-bootstrap to maintain the constant CSS. It is currently Deployed on Netifly.",
		link: "https://github.com/msaqibdani/portfolio-website"
	}

	var creditCardApplication = {
		title: "Developed a single page credit card application, using reusable custom directives, JS and TS components and templates. Used Bootstrap for aesthetics improvements",
		link: "https://github.com/msaqibdani/InterviewWebApp"
	}

	var DiscordBot = {

		title: "Developed a Leetcode discord bot in Python using Discord's and Leetcode's API. Currently it's being hosted on AWS EC2 Instance",
		link: "https://github.com/msaqibdani/LeetCode_Discord_Bot"
	}

	var calendarAutomation = {
		title: "To automate the process of blocking my day after x events have been scheduled on my calendar using Google Cal API, AWS API Gateway and AWS Lambda.",
		link: "https://github.com/msaqibdani/CalendlyGoogleCalendar"

	}

	return (
		<Row>
			<Row><h3 className="sectionHeading projectHeading">PROJECTS</h3></Row>

			<Row>
				<Col xs={12} md={6}><ProjectTemplate projectLink={DiscordBot.link} cardBody={DiscordBot.title} cardTitle="Discord Bot" technologies="Python, AWS, Discord API, Leetcode-API"/></Col>
				<Col xs={12} md={6}><ProjectTemplate projectLink={calendarAutomation.link} cardBody={calendarAutomation.title} cardTitle="Calendar Automation" technologies="Python, AWS API Gateway and Lambda, Google Calendar API"/></Col>
			</Row>
			<Row>
				<Col xs={12} md={6}><ProjectTemplate projectLink={portfolioWebsite.link} cardBody={portfolioWebsite.title} cardTitle="Portfolio Website" technologies="React, Gatsby, React-bootstrap"/></Col>
				<Col xs={12} md={6}><ProjectTemplate projectLink={housingPricesPrediction.link} cardBody={housingPricesPrediction.title} cardTitle="Housing Prices Prediction" technologies="Python"/></Col>
			</Row>

			<Row>
				<Col xs={12} md={6}><ProjectTemplate projectLink={calendarTime.link} cardBody={calendarTime.title} cardTitle="Calendar Times" technologies="Python, Django, SQLLite, HTML, CSS"/></Col>
				<Col xs={12} md={6}><ProjectTemplate projectLink={creditCardApplication.link} cardBody={creditCardApplication.title} cardTitle="Credit Card Angular Application" technologies="Angular, Typescript, HTML, CSS, Bootstrap"/></Col>
			</Row>

		</Row>
	)

}
