import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { SettingsContextProvider } from './features/Settings/SettingsContext/SettingsContext';
import { GameContextProvider } from './features/GameContent/GameContext/GameContext';

import './style/style.scss';

import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <GameContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GameContextProvider>
    </SettingsContextProvider>
  </React.StrictMode>
);
