import React, { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import ReactiveButton from 'reactive-button'
import CardContainer from '../../../components/containers/CardContainer'
import { searchIcon } from '../../../assets/icons'
import CustomInput from '../../../components/inputs/CustomInput'
import { stringValidation } from '../../validations/validations'
import Separator from '../../../components/separator/Separator'
import ItemRole from '../../../components/containers/ItemRole'
import { dataChoiceItemSearch, listChoice } from '../../data/data-choice-item-search'

function Search() {
  // Hooks
  const [loading] = useState(false)
  const [choosenItem, setChoosenItem] = useState(dataChoiceItemSearch.pays)

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

  const switchItemChoice = choiceItem => {
    setChoosenItem(choiceItem)
  }

  // Renders
  const renderChoosenItem = item => {
    switch (item) {
      case dataChoiceItemSearch.pays:
        return (
          <>
            <p>fsfsfsdf</p>
          </>
        )
      case dataChoiceItemSearch.city:
        return (
          <>
            <CustomInput
              rightClick={() => {
                formikCity.handleSubmit()
              }}
              rightIcon={searchIcon}
              placeholder="Entrer une cité"
              name="city"
              type="text"
              formik={formikCity}
              rightIconClassName="curptr"
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="flex hall wall padh10">
        <CardContainer>
          <div className="mar10">
            <div className="flex fdr wall aic jcc marb10">
              {listChoice.map(choice => {
                return (
                  <ItemRole
                    key={choice.type}
                    title={choice.title}
                    actif={choice.type === choosenItem}
                    onCLickItemRole={() => {
                      switchItemChoice(choice.type)
                    }}
                  />
                )
              })}
            </div>
            <div>{renderChoosenItem(choosenItem)}</div>
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
          <div className="flex jcc aic marv20">
            <ReactiveButton
              size="medium"
              rounded
              loadingText="Loading"
              buttonState={loading ? 'loading' : 'idle'}
              idleText="Utiliser position courante"
            />
          </div>
        </CardContainer>
      </div>
    </>
  )
}

export default Search
