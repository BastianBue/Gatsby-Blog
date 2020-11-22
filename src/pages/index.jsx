import React from "react"
import  { Link } from "gatsby"
import Layout from "../components/layout.jsx"

function IndexPage() {
  return (
    <Layout>
    <h1>hello</h1>
    <h2>Im Bastian</h2>
    <Link to="/contact" >Contact me</Link>
    </Layout>
  )
}

export default IndexPage
