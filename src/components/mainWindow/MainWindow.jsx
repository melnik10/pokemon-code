import React, {useEffect, useState} from 'react'
import style from './MainWindow.module.css'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PokemonCards from "./Content/PokemonCards";
import {connect} from "react-redux";
import {setInitializedSuccess} from "../../redux/reducers/mainWindow_reducer";
import PokemonCardModal from "./Content/PokemonCardModal/PokemonCardModal";
import {getPokemonCardsTC, getPokemonSelectedCard} from "../../redux/reducers/pokemon_reducer";
import {logout} from "../../redux/reducers/auth_reducer";
import Preloader from "../Preloader/Preloader";

const MainWindow = (props) => {
    const [modalActive, setModalActive] = useState(false)
    useEffect(() => {
        props.setInitializedSuccess()
    }, [])
    if (!props.initialized) {
        return (
          <Preloader/>
        )
    }
    return (
      <div className={style.mainWindowWrapper}>
          <div className={style.header}><Header logout={props.logout}/></div>
          <div className={style.sidebar}><Sidebar/></div>
          <div className={style.content}><PokemonCards types={props.types}
                                                       getPokemonCards={props.getPokemonCardsTC}
                                                       getCard={props.getPokemonSelectedCard}
                                                       cards={props.cards}
                                                       currentType={props.currentType}
                                                       currentSubtype={props.currentSubtype}
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
        currentType: state.pokemon.type,
        currentSubtype: state.pokemon.subtype,

    }
}
export default connect(mapStateToProps, {
    logout,
    getPokemonCardsTC,
    setInitializedSuccess,
    getPokemonSelectedCard
})(MainWindow)