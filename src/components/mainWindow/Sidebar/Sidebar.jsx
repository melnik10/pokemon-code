import React, {useEffect, useState} from "react";
import style from './Sidebar.module.css'
import SelectForm from "./SelectForm";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return (
      <div className={style.sidebar}>
          <SelectForm types={props.types} selectType={'types'}/>
          <SelectForm subtypes={props.subtypes} selectType={'subtypes'}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        types: state.pokemon.types,
        subtypes: state.pokemon.subtypes,
    }
}

export default connect(mapStateToProps, {})(Sidebar);
