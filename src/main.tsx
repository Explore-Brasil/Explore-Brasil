import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers/Providers';
import GlobalStyled from './GlobalStyled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>

  </React.StrictMode>,
)
