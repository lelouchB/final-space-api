import React from 'react';
import styles from "../_styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Card(props){
    return(
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
                {props.status == 'Alive' ?  <img src = {useBaseUrl('img/alive.jpg')}/> : null}
                {props.status == 'Dead' ? <img src = {useBaseUrl('img/dead.jpg')} /> : null}
                {props.status == 'Operational' ? <img src = {useBaseUrl('img/operational.jpg')} /> : null}
                <small>{props.status}</small>

            </div>
            </div>
        </div>
    )
}

export default Card;
