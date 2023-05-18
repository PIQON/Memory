import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './style/style.scss';
import { SettingsContextProvider } from './features/Settings/SettingsContext/SettingsContext';
import { ModalContextProvider } from './store/modal/modalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </SettingsContextProvider>
  </React.StrictMode>
);
