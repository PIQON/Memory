export type SettingsTheme = 'numbers' | 'icons';
export type SettingsPlayers = 1 | 2 | 3 | 4;
export type SettingsBoardSize = 16 | 36;

export type Settings = {
  theme: SettingsTheme;
  players: SettingsPlayers;
  boardSize: SettingsBoardSize;
};

export type UpdateSettingPayload = {
  key: keyof Settings;
  value: Settings[keyof Settings];
};

export type PlayersStatistics = {
  player: number;
  matches: number;
  moves: number;
};
