import React from "react";
import style from './PokemonItem.module.css'
import {connect} from "react-redux";
import {getPokemonSelectedCard} from "../../../redux/reducers/pokemon_reducer";
import Preloader from "../../Preloader/Preloader";

const PokemonItem = (props) => {
    return (
      <div className={style.pokemonItem}>
          {props.image ? <div className={style.pokemonItemImage}>
              <img src={props.image} onClick={() => {
                  props.getPokemonSelectedCard(props.card);
                  props.setModalActive(true)
              }}/>
          </div> : <Preloader/>}
          <div className={style.pokemonItemName}>{props.name}</div>
          <div>{props.artist}</div>
      </div>

    )
}

export default connect(null, {getPokemonSelectedCard})(PokemonItem)