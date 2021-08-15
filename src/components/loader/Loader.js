import React from 'react'
import './Loader.scss'

const Loader = ({ spinning = true, fullScreen }) => (
  <div
    className={`
      loader
      ${!spinning ? 'hidden' : ''}
      ${fullScreen ? 'fullScreen' : ''}
    `}
  />
)

export default Loader
