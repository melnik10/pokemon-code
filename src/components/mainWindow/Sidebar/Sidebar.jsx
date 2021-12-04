import React, {useState} from "react";
import style from './Sidebar.module.css'
import SelectForm from "./SelectForm";
import {connect} from "react-redux";
import {
    getPokemonSubtypesTC,
    getPokemonTypesTC,
} from "../../../redux/reducers/sidebar_reducer";

const Sidebar = (props) => {
    if(!props.types) {
        props.getPokemonTypesTC();
    } else if(!props.subtypes) {
        props.getPokemonSubtypesTC();
    }
    return (
      <div className={style.sidebar}>
          <SelectForm types={props.types} selectType={'types'}/>
          <SelectForm subtypes={props.subtypes} selectType={'subtypes'}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        types: state.sidebar.types,
        subtypes: state.sidebar.subtypes,
    }
}

export default connect(mapStateToProps, {getPokemonTypesTC, getPokemonSubtypesTC})(Sidebar);
