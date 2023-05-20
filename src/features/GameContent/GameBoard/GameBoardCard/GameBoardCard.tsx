import { Button } from '../../../UI/Button/Button';
import { useGameContext } from '../../GameContext/useGameContext';
import style from './GameBoardCard.module.scss';
import { SettingsContext } from '../../../Settings/SettingsContext/SettingsContext';

import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../GameContext/utils';

export type GameBoardCardData = {
  id: number;
  value: number;
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
  const {
    state: { theme },
  } = useContext(SettingsContext);

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
      <span className={style['game-card__value']}>
        {theme === 'numbers' ? (
          value
        ) : (
          <FontAwesomeIcon icon={icons[value - 1]} />
        )}
      </span>
    </div>
  );
};
