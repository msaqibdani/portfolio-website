import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingPageIntro from "../components/LandingPageIntro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{}}>
    <LandingPageIntro></LandingPageIntro>
    </div>

    <div style={{ width: `15vw`, overflow: `hidden`, height: `30vh`, borderRadius: `50vw`, marginLeft: `10vw`}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
