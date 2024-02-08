import React, { useState } from 'react'

const Tour = React.memo(({ name, info, image, price }) => {
  const [showFullText, setShowFullText] = useState(false)

  const words = info.split(' ')
  const display = showFullText ? info : words.slice(0, 50).join(' ')

  const handleBtnClick = () => {
    setShowFullText(!showFullText)
  }

  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt="" />
        <span>{`$ ${price}`}</span>
      </div>
      <div className="text-container">
        <h2>{name}</h2>
        <p>{display}</p>
        {words.length > 50 && (
          <a href="#/" onClick={handleBtnClick}>
            {!showFullText ? 'Show More' : 'Minimize'}
          </a>
        )}
        <button type="button">Not interested</button>
      </div>
    </div>
  )
})

export default Tour
