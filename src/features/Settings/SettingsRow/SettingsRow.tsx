import { useContext } from 'react';
import { Button } from '../../UI/Button/Button';
import { SettingData } from '../SettingsData';
import style from './SettingsRow.module.scss';
import { SettingsContext } from '../SettingsContext/SettingsContext';
import { SettingDataActions } from '../SettingsContext/SettingsContextActions';

export const SettingsRow = ({ title, actions }: SettingData) => {
  const {
    state: { theme, players, boardSize },
    dispatch,
  } = useContext(SettingsContext);

  console.log(theme, players, boardSize);

  return (
    <div className={style['settings-row']}>
      <p className={style['settings-row__title']}>{title}</p>
      <div className={style['settings-row__actions']}>
        {actions.map(({ id, value, name, title }) => (
          <Button
            key={id}
            value={value}
            name={name}
            type="button"
            classNames={['btn', 'btn--settings']}
            onClick={() =>
              dispatch({
                type: SettingDataActions.CHANGE_SETTINGS,
                payload: { name, value },
              })
            }
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};
