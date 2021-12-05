import React, {useEffect, useState} from 'react'
import style from './MainWindow.module.css'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PokemonCards from "./Content/PokemonCards";
import {connect} from "react-redux";
import {setInitializedSuccess} from "../../redux/reducers/mainWindow_reducer";
import PokemonCardModal from "./Content/PokemonCardModal/PokemonCardModal";
import {getPokemonSelectedCard} from "../../redux/reducers/pokemon_reducer";

const MainWindow = (props) => {
    debugger;
    const [modalActive, setModalActive] = useState(false)
    useEffect(() => {
        props.setInitializedSuccess()
    }, [])
    if(!props.initialized) {
        return (
          <div>Loading...</div>
        )
    }
    return (

      <div className={style.mainWindowWrapper}>
          <div className={style.header}><Header/></div>
          <div className={style.sidebar}><Sidebar/></div>
          <div className={style.content}><PokemonCards types={props.types}
                                                       getCard={props.getPokemonSelectedCard}
                                                       cards={props.cards}
                                                       setModalActive={setModalActive}
                                                       subtypes={props.subtypes}/></div>
          <PokemonCardModal active={modalActive} setActive={setModalActive}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialized: state.mainWindow.initialized,
        cards: state.pokemon.cards,
        types: state.pokemon.types,
        subtypes: state.pokemon.subtypes,

    }
}
export default connect(mapStateToProps, {setInitializedSuccess, getPokemonSelectedCard})(MainWindow)