import moment from 'moment'

const convertDateToDateTime = dataEvaluation => {
  return moment.utc(dataEvaluation, 'YYYY-MM-DD')
}

const formatDate = date => {
  return moment(date).format('YYYY/MM/DD')
}

const formatDateCustom = (date, type) => {
  return moment(date).format(type)
}

const difference = (date1, date2, unit) => {
  const a = moment(date1)
  const b = moment(date2)
  return a.diff(b, unit)
}

const getTodayYYYYMMDD = () => {
  return formatDate(Date.now())
}

const getDay = date => {
  return moment(date).date()
}

const getMonth = date => {
  return moment(date).month() + 1
}

const getYear = date => {
  return moment(date).year()
}

const dateUtil = {
  convertDateToDateTime,
  formatDate,
  difference,
  getTodayYYYYMMDD,
  getDay,
  getMonth,
  getYear,
  formatDateCustom,
}

export default dateUtil
