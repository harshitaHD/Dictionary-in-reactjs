import React, { useContext, useState } from 'react'
import './Style.css';
import { InputContext } from '../App';

const Header = () => {
const[value, setValue]=useState("")
const { inputValue, setInputValue } =useContext(InputContext)

const handleInputChange = e =>setValue(e.target.value);

const handleSubmit =() =>{
    setInputValue(value)
    setValue(" ");
}

const handleInputKey =(e) =>{
 if(e.key === 'Enter'){
     setInputValue(value)
     setValue("")
 }
}

  return (
    <div className='header'>
      <div className='container-head'>
      <h1 className='text'>Word Hunt</h1>
      <h3>Search for a word</h3>
      <div className='search'>
      <div className='search-bar'>
      <input type='text'  
      placeholder='Search here...'  
      onChange={handleInputChange}  
      value={value}
      onKeyDown={handleInputKey} />
      <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}></i>
      </div>
      </div>
      {
          inputValue && (
            <h3 className='result'> Result for: <span>
            {inputValue}
            </span></h3>
          )

      }
     
      </div>
    </div>
  )
}

export default Header
