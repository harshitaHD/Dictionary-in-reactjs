import React, { useContext, useEffect, useState } from 'react'
import './Style.css';
import axios from "axios"
import { InputContext } from '../App'
import Meaning from './Meaning'
import Example from './Example'

axios.defaults.baseURL='https://api.dictionaryapi.dev/api/v2/entries/en'

const Result = () => {
const { inputValue } =useContext(InputContext)
const[response, setResponse]=useState(null);
const[error, setError]= useState("");
const[loading, setLoading]= useState(false);

const fetchData = async (param) =>{
    try{
setLoading(true)
const res = await axios(`/${param}`)
setResponse(res.data)
setError(null)
    }catch (err) {
        setError(err)
    } finally{
        setLoading(false)
    }
}

useEffect(() =>{
if(inputValue.length){
    fetchData(inputValue)
}
}, [inputValue])

if(loading){
    return <h1> loading ...</h1>
}

if(error){
    return <h1> Not Found </h1>
}

  return (
    <div className='container'>
      {
          response && (
            <div>
            <h3>Definitions:</h3>
            <Meaning mean={response}/>
            <h3>Example:</h3>
            <Example  mean={response} />

            </div>
          )
      }
    </div>
  )
}

export default Result
