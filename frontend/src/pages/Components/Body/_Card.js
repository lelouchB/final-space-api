import useBaseUrl from "@docusaurus/useBaseUrl"
import React from "react"

import styles from "../_styles.module.css"

function Card(props) {
  return (
    <div className={styles.card}>
      <div className="card shadow--tl">
        <div className="card__image">
          <img
            height="300px"
            src={useBaseUrl(`img/${props.charName}.webp`)}
            alt={props.charName}
          />
        </div>
        <div className="card__body">
          <h3>{props.name}</h3>
          <small>{props.status}</small>
        </div>
      </div>
    </div>
  )
}

export default Card
