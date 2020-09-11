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



const Experience = ({props}) =>
(


	<Row id="experience" className="topPadding">
        <h3 className="sectionHeading">WORK EXPERIENCE</h3>
        <Carousel interval='50000' className="CarouselBody">
            <Carousel.Item className="itemPadding">
                <ForMotiv />
            </Carousel.Item>
            <Carousel.Item className="itemPadding">
                <SiliconLabs />
            </Carousel.Item>
            <Carousel.Item className="itemPadding">
                <DePauwUniversity />
            </Carousel.Item>  
        </Carousel> 
	</Row>
)

export default Experience
