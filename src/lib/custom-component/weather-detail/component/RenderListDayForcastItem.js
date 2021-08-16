import React from 'react'
import StyledText from '../../../../components/StyledText'
import { weightFont } from '../../../styles/style'
import dateUtil from '../../../utils/date.util'

function RenderListDayForcastItem({ forcastDaily, index }) {
  const hours = dateUtil.formatDateCustom(forcastDaily.date, 'h:mm A')
  const temperateur = `${forcastDaily.temperature}°`
  return (
    <div key={index} className="flex wall f3 padv15 aic ">
      <div className="flex f1 aic jcc">
        <StyledText
          text={hours}
          weightText={weightFont.medium}
          sizeText={18}
          classnametext="black"
        />
      </div>
      <div className="flex f1 aic jcc">
        <i className={`first_blue ${forcastDaily.icon_class} fs25`} />
      </div>
      <div className="flex f1 aic jcc">
        <StyledText
          text={temperateur}
          weightText={weightFont.medium}
          sizeText={18}
          classnametext="black"
        />
      </div>
    </div>
  )
}

export default RenderListDayForcastItem
