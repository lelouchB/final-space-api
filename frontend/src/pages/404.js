import React from 'react';
import Layout from "@theme/Layout";
import '../css/_404.css'

function _404Page(props) {
    return (
        <Layout>
            <div className="container center _404Page">
                <h1 className="hero__title">404</h1>
                <h3 className="medium__text">Looks like you're lost</h3>

                <div className="background-image"></div>

                <p>The page you are looking for is not available</p>
                <a href="/" className="_404__home__btn">Go Back Home</a>
            </div>
        </Layout>
    );
}

export default _404Page;