import { toast, ToastOptions } from "react-toastify";

export const ToastType: any = { info: 1, success: 2, warn: 3, error: 4 }

const config: ToastOptions<{}> = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light",
}

export const Toast = (text: string = `Toasted!`, type: number) => {
  switch (type) {
    case ToastType.info:
      return toast.info(text, config)
    case ToastType.success:
      return toast.success(text, config)
    case ToastType.warn:
      return toast.warn(text, config)
    case ToastType.error:
      return toast.error(text, config)
    default:
      return toast(text, config)
  }
}
