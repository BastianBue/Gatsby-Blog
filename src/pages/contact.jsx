import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.jsx"

function ContactPage() {
  return (
    <Layout title="Contact">
      <h1>Contact me!</h1>
      <Link to="https://bastianbueldpersonalsite.herokuapp.com/">
        Check out my Website
      </Link>
      <a href="mailto:b.bueld@gmx.de">
        <p>Email me!</p>
      </a>
    </Layout>
  )
}

export default ContactPage
