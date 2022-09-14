import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


const AboutPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
     <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query($path: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { rootPage: { eq: $path } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            rootPage
          }
        }
      }
    }
  }
`



