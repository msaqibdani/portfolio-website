import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './ForMotiv.css'
import ForMotivLogo from '../../../../images/formotiv.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'


const ForMotiv = ({props}) =>
(

    <Row>
        <Card className="cardBackground">
            <Card.Body>
                <Card.Title className="cardTitle">ForMotiv <Card.Img className="logo" src={ForMotivLogo}></Card.Img><span className="time">June 2020 - Present</span></Card.Title>
                <Card.Subtitle className="cardSubtitle mb-2">Full Stack Software Engineer<span className="location">Philadelphia, PA</span></Card.Subtitle>
                <ul className="ul">
                    <Card.Text className="cardText">
                            <li className="li"> Improved the efficiency of data transfer by refactoring of ForMotiv’s API, written in Javascript</li>
                            <li className="li"> Developing data mining techniques to retrieve data from MongoDB and preprocess data in R/Python</li>
                            <li className="li"> Developed and designed single and multi page web-applications in React and Angular, using react-bootstrap, material-ui and other CSS libraries to design and write integration manuals in different frontend frameworks</li>
                            <li className="li"> Working with clients’ engineering teams to troubleshoot integration and implementation of ForMotiv’s API</li>
                    </Card.Text>
                </ul>
                
                </Card.Body>
        </Card>
    </Row>
)

export default ForMotiv

