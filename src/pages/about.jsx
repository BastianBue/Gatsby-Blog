import React from "react"
import Layout from "../components/layout.jsx"
import { Link } from "gatsby"

function AboutPage() {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>
          Hello I am Bastian Büld, a fullstack Web-Developer based in NRW
          Germany!
        </p>
        <Link to="https://bastianbueldpersonalsite.herokuapp.com/">
          Check out my Website
        </Link>
      </Layout>
    </div>
  )
}

export default AboutPage
