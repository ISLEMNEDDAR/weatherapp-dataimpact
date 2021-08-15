import React from 'react'
import './CardContainer.scss'

function CardContainer({ children }) {
  return <div className="card wall">{children}</div>
}

export default CardContainer
