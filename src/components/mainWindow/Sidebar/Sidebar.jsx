import React, {useEffect, useState} from "react";
import style from './Sidebar.module.css'
import SelectForm from "./SelectForm";
import {connect} from "react-redux";
import {clearPokemonCards, getPokemonCardsTC} from "../../../redux/reducers/pokemon_reducer";
import Selector from "./Selector/Selector";
import {reset} from "redux-form";

const Sidebar = (props) => {
    const [type, setType] = useState(props.types[0])
    const [subtype, setSubtype] = useState(props.subtypes[0])
    const onChangeSelect = () => {
        props.getPokemonCardsTC(type, subtype)
        props.clearPokemonCards();
    }
    onChangeSelect()
    return (
      <div className={style.sidebar}>
          <Selector reset={reset} selectorType={'types'} onClickSelectorValue={setType} inputName={'Types'} {...props}/>
          <Selector reset={reset} selectorType={'subtypes'} onClickSelectorValue={setSubtype} {...props}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        types: state.pokemon.types,
        subtypes: state.pokemon.subtypes,
    }
}

export default connect(mapStateToProps, {reset, getPokemonCardsTC, clearPokemonCards})(Sidebar);
