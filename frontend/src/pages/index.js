import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import React from "react"

import Body from "./Components/Body/_Body"
import Head from "./Components/Head/_Head"

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      permalink="/"
      title={`Hello from ${siteConfig.title}`}
      description="Final Space API is a RESTful public API based on the animated television show Final Space."
    >
      <Head />
      <Body />
    </Layout>
  )
}

export default Home
