import React from "react";
import style from './PokemonCards.module.css'
import PokemonItem from "./PokemonItem";
import Preloader from "../../common/Preloader/Preloader";

const PokemonCards = (props) => {
    if (!props.cards) {
        return (
          <Preloader/>
        )
    }
    return (
      <div>
          <div className={style.pokemonCardsWrapper}>
              <div className={style.pokemonCards}>
                  {props.cards.length ? props.cards.map((card, index) => {
                      if (index > 3) {
                          return
                      }
                      return (<PokemonItem
                        name={card.name}
                        setModalActive={props.setModalActive}
                        getCard={props.getCard}
                        artist={card.artist}
                        image={card.images.small}
                        id={card.id}
                        key={card.id}
                        card={card}/>)
                  }) : <div className={style.pokemonCardsIsNull}>The such pokemons is not exist...</div>}
              </div>
          </div>
      </div>


    )
}
export default PokemonCards