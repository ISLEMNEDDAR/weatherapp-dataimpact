import { dispatchAction } from '../../utils/dispatch.util'

const coordianteeAction = {
  SET_STATE: 'coordiante/SET_STATE',
  updateCooriante: (lat, lon) => {
    return dispatchAction(coordianteeAction.SET_STATE, {
      lat,
      lon,
    })
  },
}

export default coordianteeAction
