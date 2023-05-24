import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Settings, UpdateSettingPayload } from './types';
import { Card } from '../../../features/GameContent/GameBoard/GameBoardCard/GameBoardCard';
import { MAXIMUM_CARD_REPETITION } from './utils';

import { v4 as uuidv4 } from 'uuid';

type State = {
  settings: Settings;
  cards: Card[];
};

const initialState: State = {
  settings: {
    theme: 'numbers',
    players: 1,
    boardSize: 16,
  },
  cards: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeSettings: (state, action: PayloadAction<UpdateSettingPayload>) => {
      const { key, value } = action.payload;
      state.settings = {
        ...state.settings,
        [key]: value,
      };
    },
    generateCards: (state) => {
      const generatedCards: Card[] = [];

      const generateSizeRange =
        state.settings.boardSize / MAXIMUM_CARD_REPETITION;

      for (let i = 1; i <= generateSizeRange; i++) {
        for (let j = 0; j < MAXIMUM_CARD_REPETITION; j++) {
          console.log(uuidv4());
          generatedCards.push({
            id: uuidv4(),
            value: i,
            isActive: false,
            isComplete: false,
          });
        }
      }

      state.cards = generatedCards;
    },

    shuffleCards: (state) => {
      const shuffledCards = [...state.cards];

      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [
          shuffledCards[j],
          shuffledCards[i],
        ];
      }

      state.cards = shuffledCards;
    },
  },
});

export const { changeSettings, generateCards, shuffleCards } =
  gameSlice.actions;
