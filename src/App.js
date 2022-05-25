import React, { createContext, useState } from 'react'
import Header from './component/Header'
import Result from './component/Result';

export const InputContext = createContext();


function App() {
const[inputValue, setInputValue]=useState('');
const value ={
  inputValue, setInputValue
}

  return (
    <InputContext.Provider value={value}>
    <div className='app'>
    <Header />
    <Result />
    </div>
    </InputContext.Provider>
  )
}

export default App
