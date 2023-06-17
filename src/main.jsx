import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  UserProvider } from './context/UserContext.jsx'
import { EventProvider } from './context/EventContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <UserProvider>
    <EventProvider>
    <App />
    </EventProvider>
    </UserProvider>
  </React.StrictMode>,
)
