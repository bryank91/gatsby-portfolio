import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DomainCard from "../components/cardDomain"
import JacksCard from "../components/cardJacks"
import HotcopperCard from "../components/cardHotcopper"
import KhoodesignsCard from "../components/cardKhoodesigns"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 id="about">About</h1>
    <p>Experienced full-stack software and mobile engineer. Believer in Agile methodology and all things Cloud.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <h1 id="experience">Experience</h1>
    <JacksCard />
    <br />
    <DomainCard />
    <br />
    <KhoodesignsCard />
    <br />
    <HotcopperCard />
    <h3>EY</h3>
    <p>Now go build something great.</p>            
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1 id="projects">Projects</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>              
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
