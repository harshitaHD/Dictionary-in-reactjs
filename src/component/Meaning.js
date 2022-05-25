import React from 'react'
import './Style.css'

const Meaning = ( { mean } ) => {
  return (
    <div>
      {mean.map(val =>val.meanings.map(means => means.definitions.map(def =>(
          <div key={def.definition}>
          <ul>
          <li>{def.definition}</li>
          </ul>
          </div>
      ))))}
    </div>
  )
}

export default Meaning
