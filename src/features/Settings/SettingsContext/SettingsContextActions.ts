import { SettingsContextData } from './SettingsContext';

export enum SettingDataActions {
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type Action = ChangeSettings;

type ChangeSettings = {
  type: SettingDataActions.CHANGE_SETTINGS;
  payload: {
    name: keyof SettingsContextData;
    value: SettingsContextData[keyof SettingsContextData];
  };
};
