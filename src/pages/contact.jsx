import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.jsx"

function ContactPage() {
  return (
    <Layout>
    <h1>hello</h1>
    <h2>Contact me</h2>
    <Link to="/about">more about me!</Link>
    <a href="https://www.google.com">my Twitter</a>
    </Layout>
  )
}

export default ContactPage
