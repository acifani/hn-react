import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import * as serviceWorker from './serviceWorker'

// @ts-ignore
ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
)

serviceWorker.register()
