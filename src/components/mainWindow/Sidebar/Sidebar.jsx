import React, {useEffect, useState} from "react";
import style from './Sidebar.module.css'
import SelectForm from "./SelectForm";
import {connect} from "react-redux";
import {getPokemonCardsTC} from "../../../redux/reducers/pokemon_reducer";

const Sidebar = (props) => {
    const onChangeSelect = (data) => {
        let queryCards = `types:"${data.types}" subtypes:"${data.subtypes}"`
        props.getPokemonCardsTC(queryCards)
    }
    return (
      <div className={style.sidebar}>
          <SelectForm  initialValues={{types: props.types[0], subtypes: props.subtypes[0]}} {...props} onChange={onChangeSelect}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        types: state.pokemon.types,
        subtypes: state.pokemon.subtypes,
    }
}

export default connect(mapStateToProps, {getPokemonCardsTC})(Sidebar);
