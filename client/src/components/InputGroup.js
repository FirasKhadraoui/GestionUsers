import React from 'react'

function InputGroup({label, type, name,value}) {
  return (
    <div className="mb-3">
    <label for="Email" className="form-label">
      {label}
    </label>
    <input type={type} value={value} name={name}/>
  </div>
  )
}

export default InputGroup