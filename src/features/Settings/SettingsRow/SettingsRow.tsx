import { Button } from '../../UI/Button/Button';
import { SettingData } from '../SettingsData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { changeSettings } from '../../../store/slices/game/gameSlice';

import style from './SettingsRow.module.scss';

export const SettingsRow = ({ title, actions }: SettingData) => {
  const { settings } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  return (
    <div className={style['settings-row']}>
      <p className={style['settings-row__title']}>{title}</p>
      <div className={style['settings-row__actions']}>
        {actions.map(({ id, value, name, title }) => (
          <Button
            key={id}
            type="button"
            classNames={[
              'btn',
              'btn--settings',
              settings[name] === value ? 'btn--active' : '',
            ]}
            onClick={() => dispatch(changeSettings({ key: name, value }))}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
};
