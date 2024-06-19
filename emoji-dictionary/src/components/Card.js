import React from 'react'

const Card = (props) => {
  return (
        <div className="card">
        <p>{props.img}</p>
        <h2>{props.title}</h2>
        <span>{props.content}</span>
        </div>
      
  )
}

export default Card
