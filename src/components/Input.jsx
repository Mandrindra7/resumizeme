import { useState } from 'react'

import "../assets/css/input.scss"

const Input = ({type, label, value}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <input className={`input ${inputValue ? 'has-value' : ''}`}  type={type} value={inputValue}  onChange={handleInputChange} />
      <label className="label">{label}</label>
    </div>
  )
}

export default Input