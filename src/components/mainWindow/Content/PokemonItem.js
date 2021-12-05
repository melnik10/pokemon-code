import React from "react";
import style from './PokemonItem.module.css'

const PokemonItem = (props) => {
    return (
      <div className={style.pokemonItem}>
          <div className={style.pokemonItemImage}><img src={props.image}/></div>
          <div>{props.name}</div>
          <div>{props.artist}</div>
      </div>
    )
}

export default PokemonItem;