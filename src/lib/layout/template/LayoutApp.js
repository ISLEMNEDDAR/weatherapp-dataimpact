import React from 'react'
import Header from '../header/Header'

function LayoutApp({ children }) {
  return (
    <div className="hp100 flex fdc">
      <Header />
      <div className="bgWhite padh20 padv20 flex f1">{children}</div>
    </div>
  )
}

export default LayoutApp
