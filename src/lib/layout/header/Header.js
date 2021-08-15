import React from 'react'
import './Header.scss'
import { weatherIcon } from '../../../assets/icons'

function Header() {
  return (
    <div className="header">
      <div>
        <img src={weatherIcon} alt="weather icon" width={40} />
      </div>
    </div>
  )
}

export default Header
