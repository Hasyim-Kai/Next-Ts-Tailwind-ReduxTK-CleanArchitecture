import '../presentation/styles/globals.css'
import '../presentation/styles/circle-bg.css'
import '../presentation/styles/scrollbar.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/store'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme="light" />
  </Provider>
}

export default MyApp
