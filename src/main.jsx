import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import I18n from "./i18n/index.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <I18n render={(setLocal, locale) => <App onLocaleChanged={setLocal} locale={locale} />} />
  </StrictMode>,
)
