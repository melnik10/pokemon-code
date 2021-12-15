import React, {useEffect, useState} from 'react'
import style from './MainWindow.module.css'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PokemonCards from "./Content/PokemonCards";
import {connect} from "react-redux";
import {setInitializedSuccess} from "../../redux/reducers/mainWindow_reducer";
import PokemonCardModal from "./Content/PokemonCardModal/PokemonCardModal";
import {clearPokemonCards, getPokemonCardsTC, getPokemonSelectedCard} from "../../redux/reducers/pokemon_reducer";
import {logout} from "../../redux/reducers/auth_reducer";
import Preloader from "../common/Preloader/Preloader";
import Content from "./Content/Content";

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
          <div className={style.content}><Content setModalActive={setModalActive}/></div>
          <PokemonCardModal active={modalActive} setActive={setModalActive}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initialized: state.mainWindow.initialized,
    }
}
export default connect(mapStateToProps, {
    logout,
    setInitializedSuccess,
})(MainWindow)