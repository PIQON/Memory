import { Button } from '../../../UI/Button/Button';
import style from './GameBoardCard.module.scss';

export type GameBoardCardData = {
  id: number;
  value: string;
  isActive: boolean;
  isComplete: boolean;
};

export const GameBoardCard = ({
  value,
  isActive,
  isComplete,
}: GameBoardCardData) => {
  return (
    <div className={`${style['game-card']} `}>
      <Button type="button" classNames={['btn', 'btn--card']}>
        &nbsp;
      </Button>
      <span className={style['game-card__value']}>{value}</span>
    </div>
  );
};
