import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
          <br />
          <p
            style={{
              color: 'cornflowerblue',
              fontSize: 50,
              fontWeight: 'bold',
            }}
          >
            Gatsby Markdown Starter
          </p>
          <h2>Boilerplate for markdown-based website</h2>
          <br />
          <Link to="/docs/guide/anchor">
            <Button
              type="primary"
              size="large"
              icon="right-circle"
              style={{ marginRight: 10 }}
            >
              Guide
            </Button>
          </Link>
          <Button
            type="primary"
            size="large"
            icon="github"
            href="https://github.com/cvluca/gatsby-starter-markdown"
            style={{ marginRight: 10 }}
          >
            Github
          </Button>
          <Button
            type="primary"
            size="large"
            icon="twitter"
            href="https://github.com/cvluca/gatsby-starter-markdown"
          >
            twitter
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
