import {
  AnyAction,
  Dispatch,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import {
  PlayersStatistics,
  Settings,
  SettingsPlayers,
  UpdateSettingPayload,
} from './types';
import { Card } from '../../../features/GameContent/GameBoard/GameBoardCard/GameBoardCard';
import { MAXIMUM_CARD_REPETITION } from './utils';

import { v4 as uuidv4 } from 'uuid';

type State = {
  settings: Settings;
  cards: Card[];
  flippedCards: Card[];
  matchedCards: Card[];
  statistics: PlayersStatistics[];
  activePlayer: SettingsPlayers;
  currentWinner: PlayersStatistics | null;
};

const initialState: State = {
  settings: {
    theme: 'numbers',
    players: 1,
    boardSize: 16,
  },
  cards: [],
  flippedCards: [],
  matchedCards: [],
  statistics: [],
  activePlayer: 1,
  currentWinner: null,
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

    generatePlayersStatistics: (state) => {
      const playersStatistics: PlayersStatistics[] = [];

      for (let i = 1; i <= state.settings.players; i++) {
        playersStatistics.push({
          player: i,
          matches: 0,
          moves: 0,
        });
      }

      state.statistics = playersStatistics;
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

    flipCard: (state, action: PayloadAction<string>) => {
      const card = state.cards.find((card) => card.id === action.payload);

      if (!card) return;

      if (state.flippedCards.length > 1 || card?.isActive || card?.isComplete)
        return;

      const updatedCards = state.cards.map((card) =>
        card.id === action.payload ? { ...card, isActive: true } : card
      );

      state.flippedCards.push(card);
      state.cards = updatedCards;
    },

    matchedCardsChange: (state) => {
      const [firstCard, secondCard] = state.flippedCards;

      const updatedCards = state.cards.map((card) => {
        if ([firstCard.id, secondCard.id].includes(card.id)) {
          return { ...card, isComplete: true };
        }
        return card;
      });

      state.matchedCards.push(firstCard, secondCard);

      state.cards = updatedCards;
    },

    cardMatches: (state) => {
      const updatedCards = state.cards.map((card) =>
        card.isComplete ? card : { ...card, isActive: false }
      );

      state.cards = updatedCards;
    },

    clearFlippedCards: (state) => {
      state.flippedCards = [];
    },

    changeActivePlayer: (state) => {
      const newPlayer = (state.activePlayer + 1) as SettingsPlayers;
      state.activePlayer = newPlayer > state.settings.players ? 1 : newPlayer;
    },

    currentGameWinner: (state) => {
      const currentPlayerWinner = state.statistics.sort(
        (a, b) => b.matches - a.matches
      );

      if (currentPlayerWinner[0] === currentPlayerWinner[1]) {
        state.currentWinner = null;
      }

      state.currentWinner = currentPlayerWinner[0];
    },

    changePlayerStatistics: (
      state,
      action: PayloadAction<{ matchedCard: boolean }>
    ) => {
      const newMoves = state.statistics.map((statistic) => {
        if (statistic.player === state.activePlayer) {
          return {
            ...statistic,
            moves: (state.statistics[state.activePlayer - 1].moves += 1),
            matches: action.payload
              ? state.statistics[state.activePlayer - 1].matches + 1
              : state.statistics[state.activePlayer - 1].matches,
          };
        }
        return statistic;
      });

      state.statistics = newMoves;
    },
    resetGame: (state) => {
      state.cards = state.cards.map((card) => {
        return { ...card, isActive: false, isComplete: false };
      });
      state.activePlayer = 1;
      state.matchedCards = [];
      state.flippedCards = [];
      state.currentWinner = null;
    },
  },
});

export const {
  changeSettings,
  generateCards,
  shuffleCards,
  flipCard,
  cardMatches,
  matchedCardsChange,
  clearFlippedCards,
  generatePlayersStatistics,
  resetGame,
  changeActivePlayer,
  changePlayerStatistics,
  currentGameWinner,
} = gameSlice.actions;
