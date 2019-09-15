import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <div className="title-bg">
        <h1>Apartment Waltraud</h1>
      </div>
      <section>{frontmatter.intro}</section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { pageId: { eq: "homepage" } }) {
      frontmatter {
        intro
      }
    }
  }
`