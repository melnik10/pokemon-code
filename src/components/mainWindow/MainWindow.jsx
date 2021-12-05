import React, {useEffect} from 'react'
import style from './MainWindow.module.css'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PokemonCards from "./Content/PokemonCards";
import {connect} from "react-redux";
import {setInitializedSuccess} from "../../redux/reducers/mainWindow_reducer";

const MainWindow = (props) => {
    debugger;
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
                                                       cards={props.cards}
                                                       subtypes={props.subtypes}/></div>
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
export default connect(mapStateToProps, {setInitializedSuccess})(MainWindow)