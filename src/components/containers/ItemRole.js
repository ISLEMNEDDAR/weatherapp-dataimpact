import React from 'react'
import './ItemRole.scss'
import { weightFont } from '../../lib/styles/style'
import StyledText from '../StyledText'

function ItemRole({ title, actif, onCLickItemRole }) {
  return (
    <div
      aria-hidden="true"
      className={`flex aic jcc fdc br item padv10 padh7 marh5 ${
        actif ? 'item_selected' : 'curptr'
      }`}
      onClick={onCLickItemRole}
    >
      <StyledText text={title} sizeText={18} weightText={weightFont.medium} />
    </div>
  )
}

export default ItemRole
