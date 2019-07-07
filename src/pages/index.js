import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DomainCard from "../components/cardDomain"
import JacksCard from "../components/cardJacks"
import HotcopperCard from "../components/cardHotcopper"
import KhoodesignsCard from "../components/cardKhoodesigns"
import EYCard from "../components/cardEY"
import Projects from "../components/skills"

const IndexPage = () => (
  <Layout id='main-content'>
    <SEO title="Home" />
    <h1 id="about">About</h1>
    <p>Experienced full-stack software and mobile engineer. Believer in Agile methodology and all things Cloud.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h1 id="experience">Experience</h1>
    <JacksCard />
    <br />
    <DomainCard />
    <br />
    <KhoodesignsCard />
    <br />
    <HotcopperCard />
    <br />
    <EYCard />
    <br />
    <Projects />                    
  </Layout>
)

export default IndexPage
