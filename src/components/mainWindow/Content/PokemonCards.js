import React from "react";
import {connect} from "react-redux";
import style from './PokemonCards.module.css'
import PokemonItem from "./PokemonItem";

const PokemonCards = (props) => {
    if (!props.cards) {
        return (
          <div>
              Loading...
          </div>
        )
    }
    return (
      <div className={style.pokemonCards}>
          {props.cards.length ? props.cards.map((card) => <PokemonItem
            name={card.name}
            setModalActive={props.setModalActive}
            getCard={props.getCard}
            artist={card.artist}
            image={card.images.small}
            id={card.id}
            key={card.id}
            card={card}/>) : <div>Таких покемонов не существует...</div>}
      </div>
    )
}


export default PokemonCards