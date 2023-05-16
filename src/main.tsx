import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './style/style.scss';
import { SettingsContextProvider } from './features/Settings/SettingsContext/SettingsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);
