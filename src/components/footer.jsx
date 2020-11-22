import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.mt100}>
      <p>
        Created by {data.site.siteMetadata.author}, copyright{" "}
        {data.site.siteMetadata.author}!
      </p>
    </footer>
  )
}

export default Footer
