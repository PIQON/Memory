import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { GameContextProvider } from './features/GameContent/GameContext/GameContext';

import './style/style.scss';

import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </Provider>
  </React.StrictMode>
);
