import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './style/style.scss';
import { SettingsContextProvider } from './features/Settings/SettingsContext/SettingsContext';
import { ModalContextProvider } from './store/modal/modalContext';
import { GameContextProvider } from './features/GameContent/GameContext/GameContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContextProvider>
      <SettingsContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </SettingsContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
