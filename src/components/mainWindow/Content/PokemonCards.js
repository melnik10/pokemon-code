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
    return (
      <div className={style.pokemonCards}>
          {props.cards ? props.cards.map((card) => <PokemonItem
            name={card.name}
            artist={card.artist}
            image={card.images.large}
            key={card.id}/>) : ''}
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.pokemon.cards
    }
}

export default connect(mapStateToProps, {})(PokemonCards)