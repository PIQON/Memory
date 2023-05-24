import style from './GameBoard.module.scss';
import { GameBoardCard } from './GameBoardCard/GameBoardCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export const GameBoard = () => {
  const { settings, cards } = useSelector((state: RootState) => state.game);
  return (
    <div
      className={`${style['game-board']} ${
        style[`game-board--${settings.boardSize}`]
      }`}
    >
      {cards.map((card) => (
        <GameBoardCard key={card.id} {...card} />
      ))}
    </div>
  );
};
