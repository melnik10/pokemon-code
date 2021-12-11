import React from "react";
import style from './PokemonCards.module.css'
import PokemonItem from "./PokemonItem";
import Preloader from "../../Preloader/Preloader";
import Paginator from "../../Paginator/Paginator";

const PokemonCards = (props) => {
    if (!props.cards) {
        return (
          <Preloader/>
        )
    }
    return (
      <div>
          <div className={style.paginator}>
              {props.cards.length ? <Paginator totalItemsCount={props.cards.length}
                                               portionSize={3}
                                               currentType={props.currentType}
                                               currentSubtype={props.currentSubtype}
                                               onPageChanged={props.getPokemonCards}
                                               pageSize={4}/> : ''}
          </div>
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
                  }) : <div>The such pokemons is not exist...</div>}
              </div>
          </div>
      </div>


    )
}
export default PokemonCards