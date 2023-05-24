import { Button } from '../../../UI/Button/Button';
import { useGameContext } from '../../GameContext/useGameContext';
import style from './GameBoardCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../GameContext/utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export type Card = {
  id: string;
  value: number;
  isActive: boolean;
  isComplete: boolean;
};

export const GameBoardCard = ({ id, value, isActive, isComplete }: Card) => {
  const { flipCard } = useGameContext();
  const { settings } = useSelector((state: RootState) => state.game);

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
        onClick={() => flipCard(0)}
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
