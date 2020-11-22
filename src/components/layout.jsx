import React from "react"
import Footer from "../components/footer.jsx"
import Header from "../components/header.jsx"

import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
