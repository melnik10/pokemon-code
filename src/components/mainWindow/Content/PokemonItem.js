import React from "react";
import style from './PokemonItem.module.css'
import {connect} from "react-redux";
import {getPokemonSelectedCard} from "../../../redux/reducers/pokemon_reducer";

const PokemonItem = (props) => {
    return (
      <div className={style.pokemonItem}>

          <div className={style.pokemonItemImage}><img onClick={() => {
              props.getPokemonSelectedCard(props.card);
              props.setModalActive(true)}} src={props.image}/></div>
          <div>{props.name}</div>
          <div>{props.artist}</div>
      </div>
    )
}

export default connect(null, {getPokemonSelectedCard})(PokemonItem)