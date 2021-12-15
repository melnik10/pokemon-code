import React, {useCallback, useEffect} from "react";
import style from './PokemonCardModal.module.css'
import {connect, useDispatch} from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard";
import {clearPokemonSelectedCard} from "../../../../redux/reducers/pokemon_reducer";

const PokemonCardModal = ({active, setActive, selectedCard}) => {
    const dispatch = useDispatch()
    const closeModal = () => {
        setActive(false)
        dispatch(clearPokemonSelectedCard())
    }
    return (
      <div onClick={() => closeModal()}
           className={active ? `${style.pokemonCardModal} ${style.active}` : style.pokemonCardModal}>
          <div onClick={(event) => event.stopPropagation()}
               className={active ? `${style.pokemonCardModal__content} ${style.active}` : style.pokemonCardModal__content}>
              {selectedCard ?
                <PokemonCard selectedCard={selectedCard}/> : ''}
          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedCard: state.pokemon.selectedCard,
    }
}

export default connect(mapStateToProps, {})(PokemonCardModal)