import React from 'react'
import ClassicInput from './ClassicInput'

function CustomInput({
  formik,
  name,
  type,
  placeholder,
  rightIcon,
  rightClick,
  classNameContainer,
  rightIconClassName,
}) {
  return (
    <ClassicInput
      name={name}
      type={type}
      value={formik.values[[name]]}
      placeholder={placeholder}
      classNameinput="raleway fs14"
      classNameContainer={`marb10 brad8 wall padh10 padv20 ${classNameContainer}`}
      styleContainer={{ border: '1px solid #B4C5CD', height: '40px' }}
      onChange={formik.handleChange(name)}
      onBLur={formik.handleBlur(name)}
      error={formik.errors[[name]] ? formik.errors[[name]] : ''}
      rightIcon={rightIcon}
      rightClick={rightClick}
      rightIconClassName={rightIconClassName}
    />
  )
}

export default CustomInput
