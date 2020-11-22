import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head.jsx"

import headerStyles from "../styles/header.module.scss"

function Header(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Head title={props.title + " | Gatsby-Blog"} />
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
