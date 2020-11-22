import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM D, YYYY")
      body {
        json
      }
    }
  }
`

function Blog(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <h3>{props.data.contentfulBlogPost.publishedDate}</h3>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
    </Layout>
  )
}

export default Blog
