import React from "react";

export const InputField = ({input, inputValue, onClick, type, placeholder, className}) => (
  <div>
      <input {...input} onClick={onClick} value={inputValue} placeholder={placeholder} autoComplete={'off'} type={type}
             className={className}/>
  </div>
)

export default InputField