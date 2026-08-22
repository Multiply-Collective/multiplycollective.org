import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const redirectedPath = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirectedPath) {
  history.replaceState(null, '', redirectedPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
