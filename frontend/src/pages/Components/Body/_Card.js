import React from 'react';
import styles from "../_styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import '../../../css/_Card.css'

function Card(props){
  const statusCharacter = (status) => {
    switch(status) {
      case 'Alive':
        return 'green';
      case 'Dead':
      case 'Deceased':
        return 'red';
      case 'Operational':
        return 'yellow';
      default:
        return 'black';
    }
  }

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
                <small>{props.status}</small>

               { /* <div className={`status-icon status-${statusCharacter(props.status)}`}></div> */ }
                <div className="cont-img-status">
                  <img src={`../../../img/icon-status-${statusCharacter(props.status)}.jpg`} alt={props.status}/>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Card
