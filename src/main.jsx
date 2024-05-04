import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals.css'
import { BrowserRouter } from 'react-router-dom';
import SSRProvider from 'react-bootstrap/SSRProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SSRProvider>
        <App />
      </SSRProvider>;
    </BrowserRouter>
  </React.StrictMode>,
)
