import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Body from './Body/Body'
import Head from './Head/Head'


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink="/"
        title={`Hello from ${siteConfig.title}`}
        description="Final Space API is a RESTful public API based on the animated television show Final Space."
      >
      <Head/>
      <Body/>
    </Layout>
  );
}

export default Home;
