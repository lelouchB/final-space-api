import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

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
          <div className="hero shadow--md" style={{ marginTop: "10px" }}>
            <div className="container">
              <h1 className="hero__title">Final Space</h1>
              <p className="hero__subtitle">
                <b>Final Space </b>is an American adult animated space opera
                comedy-drama television series created by Olan Rogers for TBS.
                The series involves a prisoner named <b>Gary Goodspeed</b> and
                his alien friend, <b>Mooncake</b>, and focuses on their
                intergalactic adventures as they try to solve the mystery of the
                titular "Final Space".
              </p>
              <div>
                <button className="button button--secondary button--outline button--lg">
                  <Link to={useBaseUrl("docs/react")}>Docs</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img
                    height="300px"
                    src="img/gary_goodspeed.jpg"
                    alt="gary_goodspeed"
                  />
                </div>
                <div className="card__body">
                  <h3>Gary Goodspeed</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img height="300px" src="img/mooncake.jpg" alt="mooncake" />
                </div>
                <div className="card__body">
                  <h3>Mooncake</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img
                    height="300px"
                    src="img/quinn_ergon.jpg"
                    alt="quinn_ergon"
                  />
                </div>
                <div className="card__body">
                  <h3>Quinn Ergon</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img
                    height="300px"
                    src="img/little_cato.jpg"
                    alt="little_cato"
                  />
                </div>
                <div className="card__body">
                  <h3>Little Cato</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img height="300px" src="img/avocato.jpg" alt="avocato" />
                </div>
                <div className="card__body">
                  <h3>Avocato</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img height="300px" src="img/kvn.jpg" alt="kvn" />
                </div>
                <div className="card__body">
                  <h3>K.V.N</h3>
                  <small>Operational</small>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card shadow--tl">
                <div className="card__image">
                  <img
                    height="300px"
                    src="img/ash_graven.jpg"
                    alt="ash_graven"
                  />
                </div>
                <div className="card__body">
                  <h3>Ash Graven</h3>
                  <small>Alive</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
