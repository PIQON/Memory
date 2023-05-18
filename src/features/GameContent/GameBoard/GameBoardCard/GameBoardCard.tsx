import { Button } from '../../../UI/Button/Button';
import { useGameContext } from '../../GameContext/useGameContext';
import style from './GameBoardCard.module.scss';

export type GameBoardCardData = {
  id: number;
  value: string;
  isActive: boolean;
  isComplete: boolean;
};

export const GameBoardCard = ({
  id,
  value,
  isActive,
  isComplete,
}: GameBoardCardData) => {
  const { flipCard } = useGameContext();

  return (
    <div
      className={`${style['game-card']} ${
        isActive && style['game-card--show']
      } ${isComplete && style['game-card--complete']}`}
    >
      <Button
        type="button"
        classNames={['btn', 'btn--card', `${isActive && 'btn--show'}`]}
        tabIndex={isComplete ? -1 : undefined}
        onClick={() => flipCard(id)}
      >
        &nbsp;
      </Button>
      <span className={style['game-card__value']}>{value}</span>
    </div>
  );
};
