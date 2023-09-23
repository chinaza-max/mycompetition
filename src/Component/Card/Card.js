import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='Card'>
        <h2>
            {props.h1P}
        </h2>
        <h2 className='CardColored'>
            {props.h2P}
        </h2>
        <p>
            {props.T1P}
        </p>
    </div>
  )
}
