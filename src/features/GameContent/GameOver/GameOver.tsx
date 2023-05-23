import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { useGameContext } from '../GameContext/useGameContext';
import { useContext } from 'react';
import style from './GameOver.module.scss';
import { StatisticsItem } from '../GameStatistics/StatisticsItem/StatisticsItem';
import { Button } from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

export const GameOver = () => {
  const { currentWinner, statistics } = useGameContext();
  const {
    state: { players },
  } = useContext(SettingsContext);

  console.log(currentWinner);

  return (
    <div className={style['game-over']}>
      <p className={style['game-over__title']}>
        {players === 1
          ? 'You did it!'
          : `Player ${currentWinner?.player} Wins!`}
      </p>
      <p className={style['game-over__description']}>
        Game over! Here are the results
      </p>
      <div className={style['game-over__statistics']}>
        <StatisticsItem
          title={`Player ${currentWinner?.player} (Winner)`}
          value={`${currentWinner?.matches} Pairs`}
        />
        {statistics
          .filter((statistic) => statistic.player !== currentWinner?.player)
          .map((statistic) => {
            return (
              <StatisticsItem
                key={statistic.player}
                title={`Player ${statistic.player}`}
                value={`${statistic.matches} Pairs`}
              />
            );
          })}
      </div>
      <div className={style['game-over__menu']}>
        <Button
          type="button"
          classNames={['btn', 'btn--settings', 'btn--primary']}
        >
          Restart
        </Button>
        <Link to="/" className={style['mobile-link']}>
          Setup New Game
        </Link>
      </div>
    </div>
  );
};
