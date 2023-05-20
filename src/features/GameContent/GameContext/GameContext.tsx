import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenRoot } from '../../../types/shared';
import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { REPETITION, icons, shuffleArray } from './utils';
import { GameBoardCardData } from '../GameBoard/GameBoardCard/GameBoardCard';

type GameContextData = {
  data: GameBoardCardData[];
  flipCard: (id: number) => void;
};

export const GameContext = createContext<GameContextData | null>(null);

export const GameContextProvider = ({ children }: ChildrenRoot) => {
  const {
    state: { boardSize, theme, players },
  } = useContext(SettingsContext);
  const [data, setData] = useState<GameBoardCardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<GameBoardCardData[]>([]);

  console.log(theme);

  useEffect(() => {
    generateData();
  }, [boardSize, theme, players]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      checkCardMatches();
    }
  }, [flippedCards]);

  const generateData = () => {
    const generatedData: GameBoardCardData[] = [];
    for (let i = 1; i <= boardSize / REPETITION; i++) {
      for (let j = 0; j < REPETITION; j++) {
        generatedData.push({
          id: +Math.random().toString(),
          value: i,
          isActive: false,
          isComplete: false,
        });
      }
    }
    console.log(generatedData);
    setData(shuffleArray(generatedData));
  };

  const flipCard = (id: number) => {
    const card = data.find((cardData) => cardData.id === id);

    if (!card) return;

    if (flippedCards.length > 1 || card?.isActive || card?.isComplete) return;

    const updatedCards = data.map((cardData) =>
      cardData.id === id ? { ...cardData, isActive: true } : cardData
    );

    setData(updatedCards);
    setFlippedCards([...flippedCards, card]);
  };

  const changeMatchesCardState = () => {
    const [firstCard, secondCard] = flippedCards;

    const updatedCards = data.map((cardData) => {
      if ([firstCard.id, secondCard.id].includes(cardData.id)) {
        return { ...cardData, isComplete: true };
      }
      return cardData;
    });

    setTimeout(() => {
      setData(updatedCards);
      setFlippedCards([]);
    }, 1000);
  };

  const checkCardMatches = () => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.value === secondCard.value) {
      return changeMatchesCardState();
    }
    const updatedCards = data.map((cardData) =>
      cardData.isComplete ? cardData : { ...cardData, isActive: false }
    );

    setTimeout(() => {
      setData(updatedCards);
      setFlippedCards([]);
    }, 1000);
  };

  return (
    <GameContext.Provider value={{ data, flipCard }}>
      {children}
    </GameContext.Provider>
  );
};
