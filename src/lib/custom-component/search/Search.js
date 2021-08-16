import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import ReactiveButton from 'reactive-button'
import { useDispatch } from 'react-redux'
import CardContainer from '../../../components/containers/CardContainer'
import { searchIcon } from '../../../assets/icons'
import CustomInput from '../../../components/inputs/CustomInput'
import { stringValidation } from '../../validations/validations'
import Separator from '../../../components/separator/Separator'
import { dataChoiceItemSearch } from '../../data/data-choice-item-search'
import { dispatchAction } from '../../utils/dispatch.util'
import weatherActions from '../../redux/weather/action'
import { searchByObject } from '../../data/weather-concepts'
import dayWeatherActions from '../../redux/daysWeather/action'
import Selectors from '../../redux/selectors'
import CitySelect from './CitySelect'

function Search({ searchByCoordinate }) {
  // Hooks
  const { weatherSelector } = Selectors()
  const { loading } = weatherSelector
  // const [choosenItem, setChoosenItem] = useState(dataChoiceItemSearch.pays)
  const dispatch = useDispatch()
  // formik
  const labelCity = 'city'
  const cityValidaton = yup.object().shape({
    city: stringValidation(
      labelCity,
      3,
      'Enter a minimum of 3 character',
      20,
      'Enter a maximum of 20 character',
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
    const { city } = values
    dispatch(
      dispatchAction(weatherActions.GET_WEATHER, {
        city,
        searchBy: searchByObject.city,
      }),
    )
    dispatch(
      dispatchAction(dayWeatherActions.GET_WEATHER, {
        city,
        searchBy: searchByObject.city,
      }),
    )
  }

  /* const switchItemChoice = choiceItem => {
    setChoosenItem(choiceItem)
  } */

  // Renders
  // i didn't use this feat
  const renderChoosenItem = item => {
    switch (item) {
      case dataChoiceItemSearch.pays:
        return (
          <>
            <CitySelect />
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
              placeholder="Enter a city"
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
            {/* <div className="flex fdr wall aic jcc marb10">
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
            </div> */}
            <div>{renderChoosenItem(dataChoiceItemSearch.city)}</div>
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
              idleText="use current position"
              onClick={() => {
                // TODO if location == current not do this
                searchByCoordinate.searchWithCurrent()
              }}
              disabled={loading}
            />
          </div>
        </CardContainer>
      </div>
    </>
  )
}

export default Search
