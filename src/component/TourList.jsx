import React, { useEffect, useState } from 'react'
import Tour from './Tour'
const url = 'https://course-api.com/react-tours-project'

function TourList() {
  // State example
  const [data, setData] = useState([])

  // useEffect example
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  const toDisplay = data.map((item) => (
    <div>
      <Tour {...item} />
    </div>
  ))

  return <div className="card-container">{toDisplay}</div>
}

export default TourList
