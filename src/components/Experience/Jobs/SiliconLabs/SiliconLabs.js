import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SiliconLabsLogo from '../../../../images/siliconLabs.png'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const logoSL = {
    marginLeft: '22vw',
    width: '5vw'
}

const SiliconLabs = ({props}) =>
(

    <Row>
        <Card className="cardBackground">
            <Card.Body>
                <Card.Title className="cardTitle">Silicon Labs <Card.Img style={logoSL} src={SiliconLabsLogo}></Card.Img><span className="time">May 2019 - August 2019</span></Card.Title>
                <Card.Subtitle className="cardSubtitle mb-2">Software Engineer Intern<span className="location">Boston, MA</span></Card.Subtitle>
                <ul className="ul">
                    <Card.Text className="cardText">
                        
                            <li className="li"> Designed and implemented user interface for the client-server network analyzer model to develop an application using Electron framework, emphasizing on cross platform development</li>
                            <li className="li"> Used ClusterizeJS to buffer large sets of data, decreasing buffer time from 17s to less than 1s</li>
                            <li className="li"> Implemented socket in Electron to create routes to deliver data packets to the frontend UI</li>
                            <li className="li"> Utilized Google protobuffers in Javascript and Java, allowing 10x faster transferring and serialization of data</li>
                    </Card.Text>
                </ul>
                
                </Card.Body>
        </Card>
    </Row>
)

export default SiliconLabs

 
