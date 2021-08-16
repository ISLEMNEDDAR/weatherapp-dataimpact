import React from 'react'
import Select from 'react-select'
import cityOptions from '../../data/countrycities'

function CitySelect({ handleCity }) {
  return (
    <Select
      options={cityOptions}
      onChange={input => {
        handleCity(input.value)
      }}
      className="wall"
    />
  )
}

export default CitySelect
