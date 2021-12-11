import React, {useState} from "react";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";


const SelectForm = (props) => {

    return (
      <div>
          <form>
              <label>Types:
                  <div><Field name={'types'} component={'select'} onChange={props.handleChange}>
                      {props.types ? props.types.map((value, index) => <option  defaultValue={value} key={index}>{value}</option>) : ''}
                  </Field></div>
              </label>
              <label>Subtypes:
                  <div><Field name={'subtypes'} component={'select'} onChange={props.handleChange}>
                      {props.subtypes ? props.subtypes.map((value, index) => <option key={index}>{value}</option> ) : ''}
                  </Field></div>
              </label>

          </form>
      </div>
    )
}

let ReduxSelectForm = reduxForm({
    form: 'selectType',
})(SelectForm)


export default ReduxSelectForm