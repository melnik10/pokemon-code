import React from "react";
import style from './Sidebar.module.css'
import SelectForm from "./SelectForm";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return (
      <div className={style.sidebar}>
          <SelectForm selectType={'types'}/>
          <SelectForm selectType={'subtypes'}/>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, {})(Sidebar);
