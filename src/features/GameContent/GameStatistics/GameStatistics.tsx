import { useContext, Fragment } from 'react';
import { SettingsContext } from '../../Settings/SettingsContext/SettingsContext';
import { useGameContext } from '../GameContext/useGameContext';
import style from './GameStatistics.module.scss';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const SinglePlayerPanel = () => {
  const { statistics } = useGameContext();

  console.log(statistics);

  return <StatisticsItem title="Moves" value={statistics[0]?.moves} />;
};

const MultiPlayerPanel = () => {
  const { statistics } = useGameContext();
  const matches = useMediaQuery('(max-width:48rem)');
  return (
    <Fragment>
      {statistics.map((statistic) => (
        <StatisticsItem
          key={statistic.player}
          title={`${matches ? 'P' : 'Player '}${statistic.player}`}
          value={statistic.moves}
        />
      ))}
    </Fragment>
  );
};

export const GameStatistics = () => {
  const {
    state: { players },
  } = useContext(SettingsContext);

  return (
    <div className={style['game-statistics']}>
      {players === 1 ? <SinglePlayerPanel /> : <MultiPlayerPanel />}
    </div>
  );
};
