import { useNavigate } from 'react-router';
import { Button } from '../UI/Button/Button';
import {
  settingsBoardDataActions,
  settingsPlayersDataActions,
  settingsThemeDataActions,
} from './SettingsData';
import { SettingsRow } from './SettingsRow/SettingsRow';

import { useEffect } from 'react';

import style from './Settings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  generateCards,
  generatePlayersStatistics,
  shuffleCards,
} from '../../store/slices/game/gameSlice';

export const Settings = () => {
  const { settings } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(generateCards());
    dispatch(shuffleCards());
    dispatch(generatePlayersStatistics());
  }, [settings]);

  return (
    <div className={style['settings']}>
      <SettingsRow title="Select Theme" actions={settingsThemeDataActions} />
      <SettingsRow
        title="Numbers of Players"
        actions={settingsPlayersDataActions}
      />
      <SettingsRow title="Grid Size" actions={settingsBoardDataActions} />
      <Button
        type="button"
        classNames={['btn', 'btn--primary', 'btn--settings']}
        onClick={() => navigate('/game')}
      >
        Start Game
      </Button>
    </div>
  );
};
