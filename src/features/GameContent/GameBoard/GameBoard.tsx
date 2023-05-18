import { useContext } from 'react';
import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { useGameContext } from '../GameContext/useGameContext';

import style from './GameBoard.module.scss';
import { GameBoardCard } from './GameBoardCard/GameBoardCard';

export const GameBoard = () => {
  const {
    state: { boardSize },
  } = useContext(SettingsContext);
  const { data } = useGameContext();
  return (
    <div
      className={`${style['game-board']} ${style[`game-board--${boardSize}`]}`}
    >
      {data.map((cardData) => (
        <GameBoardCard key={cardData.id} {...cardData} />
      ))}
    </div>
  );
};
