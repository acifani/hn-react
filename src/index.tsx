import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>
)
registerServiceWorker()
