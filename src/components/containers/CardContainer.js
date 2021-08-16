import React from 'react'
import './CardContainer.scss'

function CardContainer({ children }) {
  return (
    <div className="card wall" style={{ clear: 'both' }}>
      {children}
    </div>
  )
}

export default CardContainer
