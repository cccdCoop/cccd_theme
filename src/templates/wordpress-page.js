import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/wordpress-page.css"

export default ({ data }) => {
  const page = data.allWordpressPage.edges[0].node
  console.log(page)
  return (
    <Layout>
      <div>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`