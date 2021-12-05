import React from "react";
import {connect} from "react-redux";
import style from './PokemonCards.module.css'
import PokemonItem from "./PokemonItem";

const PokemonCards = (props) => {
    if(!props.cards) {
        return (
          <div>
              Loading...
          </div>
        )
    }
    debugger;
    return (
      <div className={style.pokemonCards}>
          {props.cards.length ? props.cards.map((card) => <PokemonItem
            name={card.name}
            artist={card.artist}
            image={card.images.large}
            key={card.id}/>) : <div>Таких покемонов не существует...</div>}
      </div>
    )
}



export default PokemonCards