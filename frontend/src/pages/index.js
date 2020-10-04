import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import myImageUrl from "../../static/img/wallapaper4.jpg";

function Home() {
  const [data, setData] = useState([]);

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  useEffect(() => {
    fetch("http://localhost:8000/api/v0/character")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
          {data.map((character) => (
            <div class="col col--5">
              <div class="card shadow--tl">
                <div class="card__image">
                  <img src={character.img_url} alt={character.name} />
                </div>
                <div class="card__body">
                  <h2>{character.name}</h2>
                  <small>{character.species}</small>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
