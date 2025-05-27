import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import {twMerge} from 'tailwind-merge'

const primeReactConfig = {
  unstyled: true,
  ripple: true,
  pt: Tailwind,
  ptOptions: {
    mergeSections: true,
    mergeProps: true,
    classNameMergeFunction: twMerge,
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PrimeReactProvider value={primeReactConfig}>
      <div className="font-quicksand">
        <App />
      </div>
    </PrimeReactProvider>
  </Provider>

)
