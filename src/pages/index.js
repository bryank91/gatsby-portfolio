import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DomainCard from "../components/cardDomain"
import JacksCard from "../components/cardJacks"
import HotcopperCard from "../components/cardHotcopper"
import KhoodesignsCard from "../components/cardKhoodesigns"
import EYCard from "../components/cardEY"
import Skills from "../components/skills"
import About from "../components/about"
import Education from "../components/education"

const IndexPage = () => (
  <Layout id='main-content'>
    <SEO title="Home" />
    <h1 id="about">About</h1>
    <About />
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
    {/* <h1 id="skills">Skills</h1>
    <Skills /> */}
    <br />
    <h1 id="education">Education</h1>
    <Education />                    
  </Layout>
)

export default IndexPage
