import React from "react";
import style from '../../common/Paginator/Paginator.module.css'
import Paginator from "../../common/Paginator/Paginator";
import PokemonCards from "./PokemonCards";
import {connect} from "react-redux";
import {clearPokemonCards, getPokemonCardsTC, getPokemonSelectedCard} from "../../../redux/reducers/pokemon_reducer";

const Content = (props) => {
    
    return (
      <div>
          <div className={style.paginator}>
              {props?.cardsLength ? <Paginator totalItemsCount={props.cardsLength}
                                                 portionSize={3}
                                                 currentType={props.currentType}
                                                 currentSubtype={props.currentSubtype}
                                                 onPageChanged={props.getPokemonCardsTC}
                                                 clearPokemonCards={props.clearPokemonCards}
                                                 pageSize={4}/> : ''}
          </div>
          <div><PokemonCards types={props.types}
                             getPokemonCards={props.getPokemonCardsTC}
                             getCard={props.getPokemonSelectedCard}
                             cards={props.cards}
                             clearPokemonCards={props.clearPokemonCards}
                             currentType={props.currentType}
                             currentSubtype={props.currentSubtype}
                             setModalActive={props.setModalActive}
                             subtypes={props.subtypes}/></div>
      </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cardsLength: state.pokemon.cardsLength,
        cards: state.pokemon.cards,
        types: state.pokemon.types,
        subtypes: state.pokemon.subtypes,
        currentType: state.pokemon.type,
        currentSubtype: state.pokemon.subtype,
    }
}

export default connect(mapStateToProps, {
    getPokemonCardsTC,
    clearPokemonCards,
    getPokemonSelectedCard
})(Content)
