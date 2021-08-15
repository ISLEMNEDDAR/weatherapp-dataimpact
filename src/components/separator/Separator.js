import React from 'react'
import './Separator.scss'

function Separator({
  text,
  textPaddingClass,
  textSizeClass,
  fontFamilyClass,
  color,
  separatorSizeClass,
}) {
  return (
    <div className="flex fdr jcc aic">
      <div className={`half-separator ${separatorSizeClass}`} />
      <p className={`${fontFamilyClass} ${textSizeClass} ${color} ${textPaddingClass} wh-nowrap`}>
        {text}
      </p>
      <div className={`half-separator ${separatorSizeClass}`} />
    </div>
  )
}

export default Separator
