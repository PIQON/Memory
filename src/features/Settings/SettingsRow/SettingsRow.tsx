import { Button } from '../../UI/Button/Button';
import { SettingData } from '../SettingsData';
import style from './SettingsRow.module.scss';

export const SettingsRow = ({ title, actions }: SettingData) => {
  return (
    <div className={style['settings-row']}>
      <p className={style['settings-row__title']}>{title}</p>
      <div className={style['settings-row__actions']}>
        {actions.map((action) => (
          <Button
            key={action.id}
            type="button"
            classNames={['btn', 'btn--settings']}
          >
            {action.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
