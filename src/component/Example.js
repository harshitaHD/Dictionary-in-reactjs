import React from 'react'
import './Style.css';

const Example = ( { mean } ) => {
  return (
    <div>
      {mean.map(val =>val.meanings.map(means => means.definitions.map(def =>(
          <div key={def.example}>
          <ol>
          {def.example}
          </ol>
          </div>
      ))))}
    </div>
  )
}

export default Example
