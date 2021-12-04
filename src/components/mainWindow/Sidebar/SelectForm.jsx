import React from "react";
import {reduxForm} from "redux-form";


const SelectForm = (props) => {
    return (
      <div>
          <form>
              <label>{props.selectType}
                  <div><select onChange={props.handleChange}>
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