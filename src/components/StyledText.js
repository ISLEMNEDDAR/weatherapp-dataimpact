import React from 'react'
import { style } from '../lib/styles/style'

function StyledText({ weightText, sizeText, classnametext, text, children }) {
  const weightTextIntern = weightText || ''
  return (
    <>
      <p className={`${style.text_blue(sizeText, weightTextIntern)} ${classnametext}`}>
        {text}
        {children}
      </p>
    </>
  )
}

export default StyledText
