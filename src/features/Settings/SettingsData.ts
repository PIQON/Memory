import {
  SettingsBoardSize,
  SettingsContextData,
  SettingsPlayers,
  SettingsTheme,
} from './SettingsContext/SettingsContext';

type SettingDataActions = {
  id: number;
  title: string;
  name: keyof SettingsContextData;
  value: SettingsTheme | SettingsPlayers | SettingsBoardSize;
};

export type SettingData = {
  title: string;
  actions: SettingDataActions[];
};

export const settingsThemeDataActions: SettingDataActions[] = [
  {
    id: 1,
    title: 'Numbers',
    name: 'theme',
    value: 'numbers',
  },
  {
    id: 2,
    title: 'Icons',
    name: 'theme',
    value: 'icons',
  },
];

export const settingsPlayersDataActions: SettingDataActions[] = [
  {
    id: 1,
    title: '1',
    name: 'players',
    value: 1,
  },
  {
    id: 2,
    title: '2',
    name: 'players',
    value: 2,
  },
  {
    id: 3,
    title: '3',
    name: 'players',
    value: 3,
  },
  {
    id: 4,
    title: '4',
    name: 'players',
    value: 4,
  },
];

export const settingsBoardDataActions: SettingDataActions[] = [
  {
    id: 1,
    title: '4x4',
    name: 'boardSize',
    value: 16,
  },
  {
    id: 2,
    title: '6x6',
    name: 'boardSize',
    value: 36,
  },
];
