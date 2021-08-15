import React from 'react'
import { CircularProgress } from '@material-ui/core'

function Loading({ minHeight }) {
  return (
    <div className={`minh${minHeight} flex jcc aic`}>
      <CircularProgress />
    </div>
  )
}

export default Loading
