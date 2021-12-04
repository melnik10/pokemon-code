import React from "react";
import {reduxForm} from "redux-form";


const SelectForm = (props) => {
    debugger;
    return (
      <div>
          <form>
              <label>{props.selectType}
                  <div><select onChange={props.handleChange}>
                      {props.types ? props.types.map((value, index) => <option key={index}>{value}</option>) : ''}
                      {props.subtypes ? props.subtypes.map((value, index) => <option key={index}>{value}</option> ) : ''}
                  </select></div>
              </label>
          </form>
      </div>
    )
}

const ReduxSelectForm = reduxForm({
    form: 'selectType',
})(SelectForm)
export default ReduxSelectForm