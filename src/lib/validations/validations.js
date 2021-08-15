import * as yup from 'yup'

export const stringValidation = (label, min, messageMin, max, messageMax) => {
  let valid = yup.string()
  if (label) {
    valid = valid.label(label)
  }
  if (min) {
    valid = valid.min(min, messageMin)
  }
  if (max) {
    valid = valid.max(max, messageMax)
  }
  return valid
}

export const anotherValidation = ''
