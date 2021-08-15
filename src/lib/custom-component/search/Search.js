import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import CardContainer from '../../../components/containers/CardContainer'
import { searchIcon } from '../../../assets/icons'
import CustomInput from '../../../components/inputs/CustomInput'
import { stringValidation } from '../../validations/validations'
import Separator from '../../../components/separator/Separator'

function Search() {
  // formik
  const labelCity = 'city'
  const cityValidaton = yup.object().shape({
    city: stringValidation(
      labelCity,
      3,
      'Enter au moins 3 charactere',
      15,
      'Entrer au max 15 caractere',
    ),
  })

  const formikCity = useFormik({
    initialValues: { city: '' },
    onSubmit: values => {
      searchWithCityName(values)
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: cityValidaton,
  })

  // functions
  const searchWithCityName = values => {
    console.log(values)
  }

  return (
    <>
      <div className="flex hall wall padh10">
        <CardContainer>
          <div className="mar10">
            <CustomInput
              rightClick={() => {
                formikCity.handleSubmit()
              }}
              rightIcon={searchIcon}
              placeholder="Entrer une cité"
              name="city"
              type="text"
              formik={formikCity}
            />
          </div>
          <div className="marh30">
            <Separator
              text="or"
              fontFamilyClass="raleway"
              color="second-blue"
              textSizeClass="fs15"
              separatorSizeClass="fs14"
              textPaddingClass="padh10"
            />
          </div>
        </CardContainer>
      </div>
    </>
  )
}

export default Search
