import React, {useCallback} from "react";
import style from './PokemonItem.module.css'
import {connect} from "react-redux";
import {getPokemonSelectedCard} from "../../../redux/reducers/pokemon_reducer";
import Preloader from "../../common/Preloader/Preloader";
import Image from "../../common/Image/Image";

const PokemonItem = (props) => {
    const onClickImage = useCallback(() => {
        props.getPokemonSelectedCard(props.card);
        props.setModalActive(true)
    }, [props.card])
    return (
      <div className={style.pokemonItem}>
          <Image image={props.image} onClickImage={onClickImage} height={'50vh'}/>
          <div className={style.pokemonItemName}>{props.name}</div>
          <div>{props.artist}</div>
      </div>

    )
}

export default connect(null, {getPokemonSelectedCard})(PokemonItem)