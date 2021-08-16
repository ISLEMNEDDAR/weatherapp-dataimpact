import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const loadingButtonText = (loading, text) => {
  return loading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : text
}

const uiHelper = {
  loadingButtonText,
}

export default uiHelper
