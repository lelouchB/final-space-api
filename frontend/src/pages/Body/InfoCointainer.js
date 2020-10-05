import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";

function InfoContainer(){
    return(
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
                <a className="button button--success button--outline button--lg" href={useBaseUrl("docs/react")}>
                    Examples
                </a>
                
              </div>
            </div>
        </div>
    )
}

export default InfoContainer;
