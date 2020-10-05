import React from 'react';
import styles from "../styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


function Head(props){
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return(
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
    )
}

export default Head;