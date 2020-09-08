import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import './experience.css'
import ForMotiv from './Jobs/ForMotiv/ForMotiv.js'
import SiliconLabs from './Jobs/SiliconLabs/SiliconLabs.js'
import DePauwUniversity from './Jobs/DePauwUniversity/DePauwUniversity.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'


const topPadding = 
{
	marginTop: '25vh',
	marginBottom: '30vh'
}


const Experience = ({props}) =>
(

	<Row id="experience" style={topPadding}>
        <h3 style={{marginLeft: '-1.5vw'}}>EXPERIENCE</h3>
        <Carousel style={{marginTop: '-2vh', marginLeft: '-1.5vw'}}>
            <Carousel.Item style={{padding: '1vw'}}>
                <ForMotiv />
            </Carousel.Item>
            <Carousel.Item style={{padding: '1vw'}}>
                <SiliconLabs />
            </Carousel.Item>
            <Carousel.Item style={{padding: '1vw'}}>
                <DePauwUniversity />
            </Carousel.Item>
            
        </Carousel>

        
	</Row>
)

export default Experience
