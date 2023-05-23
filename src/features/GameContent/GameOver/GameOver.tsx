import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { useGameContext } from '../GameContext/useGameContext';
import { useContext } from 'react';
import { StatisticsItem } from '../GameStatistics/StatisticsItem/StatisticsItem';
import { Button } from '../../UI/Button/Button';
import { RouterLink } from '../../UI/RouterLink/RouterLink';

import style from './GameOver.module.scss';

export const GameOver = () => {
  const { currentWinner, statistics, resetGame } = useGameContext();
  const {
    state: { players },
  } = useContext(SettingsContext);

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
          title={`${
            players === 1
              ? `Moves Taken`
              : `Player ${currentWinner?.player} (Winner)`
          }`}
          value={`${currentWinner?.matches} ${
            players === 1 ? `Moves` : `Pairs`
          }`}
          className="winner"
        />
        {statistics
          .filter((statistic) => statistic.player !== currentWinner?.player)
          .map((statistic) => {
            return (
              <StatisticsItem
                key={statistic.player}
                title={`Player ${statistic.player}`}
                value={`${statistic.matches} Pairs`}
                className={
                  statistic.player === currentWinner?.player ? 'winner' : ''
                }
              />
            );
          })}
      </div>
      <div className={style['game-over__menu']}>
        <Button
          type="button"
          classNames={['btn', 'btn--settings', 'btn--primary']}
          onClick={resetGame}
        >
          Restart
        </Button>
        <RouterLink path="/" title="Start New Game" />
      </div>
    </div>
  );
};
