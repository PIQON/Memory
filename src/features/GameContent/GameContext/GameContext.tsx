import { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenRoot } from '../../../types/shared';
import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { REPETITION, shuffleArray } from './utils';
import { GameBoardCardData } from '../GameBoard/GameBoardCard/GameBoardCard';

type GameContextData = {
  data: GameBoardCardData[];
};

export const GameContext = createContext<GameContextData | null>(null);

export const GameContextProvider = ({ children }: ChildrenRoot) => {
  const {
    state: { boardSize, theme, players },
  } = useContext(SettingsContext);
  const [data, setData] = useState<GameBoardCardData[]>([]);

  const generateData = () => {
    const generatedData: GameBoardCardData[] = [];
    for (let i = 1; i <= boardSize / REPETITION; i++) {
      for (let j = 0; j < REPETITION; j++) {
        generatedData.push({
          id: +Math.random().toString(),
          value: i.toString(),
          isActive: false,
          isComplete: false,
        });
      }
    }
    setData(shuffleArray(generatedData));
  };

  useEffect(() => {
    generateData();
  }, [boardSize]);

  return (
    <GameContext.Provider value={{ data }}>{children}</GameContext.Provider>
  );
};
