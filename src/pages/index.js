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
          <h1
            style={{
              color: 'cornflowerblue',
              fontSize: 50,
              fontWeight: 'bold',
            }}
          >
            Welcome
          </h1>
          <h2>to my website</h2>
          <br />
          <Link to="/docs/guide/anchor">
            <Button
              type="primary"
              size="large"
              icon="right-circle"
              style={{ marginRight: 10 }}
            >
              Home
            </Button>
          </Link>
          <Button
            type="primary"
            size="large"
            icon="github"
            href="https://github.com/AbbBallout/WebPage"
            style={{ marginRight: 10 }}
          >
            Github
          </Button>
          <Button
            type="primary"
            size="large"
            icon="twitter"
            href="https://twitter.com/AbbasComputes"
          >
            twitter
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
