import { settingsData } from './SettingsData';

import style from './Settings.module.scss';
import { SettingsRow } from './SettingsRow/SettingsRow';

export const Settings = () => {
  return (
    <div className={style['settings']}>
      {settingsData.map((settingData) => (
        <SettingsRow key={settingData.id} {...settingData} />
      ))}
    </div>
  );
};
