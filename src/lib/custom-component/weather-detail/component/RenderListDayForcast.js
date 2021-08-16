import React from 'react'
import RenderListDayForcastItem from './RenderListDayForcastItem'

function RenderListDayForcast({ nextDayWeather }) {
  const { listForcastDaily } = nextDayWeather
  return (
    <div className="item_forecast padh15">
      {listForcastDaily.map((forcastDaily, index) => {
        return <RenderListDayForcastItem index={index} forcastDaily={forcastDaily} />
      })}
    </div>
  )
}

export default RenderListDayForcast
