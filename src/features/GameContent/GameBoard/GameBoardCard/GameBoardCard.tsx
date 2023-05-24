import { Button } from '../../../UI/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../GameContext/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { flipCard } from '../../../../store/slices/game/gameSlice';

import style from './GameBoardCard.module.scss';

export type Card = {
  id: string;
  value: number;
  isActive: boolean;
  isComplete: boolean;
};

export const GameBoardCard = ({ id, value, isActive, isComplete }: Card) => {
  const { settings } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

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
        onClick={() => dispatch(flipCard(id))}
      >
        &nbsp;
      </Button>
      <span className={style['game-card__value']}>
        {settings.theme === 'numbers' ? (
          value
        ) : (
          <FontAwesomeIcon icon={icons[value - 1]} />
        )}
      </span>
    </div>
  );
};
