import React from "react";
import style from './PokemonItem.module.css'
import {connect} from "react-redux";
import {getPokemonSelectedCard} from "../../../redux/reducers/pokemon_reducer";
import preloaderImage from '../../../assets/images/Spinner-1s-200px.svg'

const PokemonItem = (props) => {
    let imageStyle = {
        width: '250px',
        height: '250px',
        backgroundImage: `url(${props.image}),url(${preloaderImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'center',
    }
    return (
      <div className={style.pokemonItem}>
          <div style={imageStyle} onClick={() => {
              props.getPokemonSelectedCard(props.card);
              props.setModalActive(true)
          }}/>
          <div className={style.pokemonItemName}>{props.name}</div>
          <div>{props.artist}</div>
      </div>
    )
}

export default connect(null, {getPokemonSelectedCard})(PokemonItem)