import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

function NotFound() {
  return (
    <Layout title="404 Not Found">
      <h1>Page not found</h1>
      <Link to="/">
        <p>Head home</p>
      </Link>
    </Layout>
  )
}

export default NotFound
