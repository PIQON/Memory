import { useNavigate } from 'react-router';
import { Button } from '../UI/Button/Button';
import style from './Settings.module.scss';
import {
  settingsBoardDataActions,
  settingsPlayersDataActions,
  settingsThemeDataActions,
} from './SettingsData';
import { SettingsRow } from './SettingsRow/SettingsRow';

export const Settings = () => {
  const navigate = useNavigate();

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
