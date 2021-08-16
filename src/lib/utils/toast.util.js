import { toast } from 'react-toastify'

const toastStyle = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const toastError = error => {
  toast.error(error, toastStyle)
}

export const toastErrorTryLater = () => {
  toast.error('Error, Try Later', toastStyle)
}

export const toastSuccess = info => {
  toast.success(info, toastStyle)
}
