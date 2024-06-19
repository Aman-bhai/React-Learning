import React from 'react'
import Card from './Card'
import Dictionary from './Dictionary'

function createcard(element) {
  return <Card img={element.img}
    title={element.title}
    content={element.content}
  />
}
const Header = () => {
  return (
    <>
      <div className='header'>
        <h1 className='header-h1'>Emoji Dictionary</h1>
      </div>
      <div className='card-container'>
        {Dictionary.map(createcard)}


      </div></>
  )
}

export default Header
