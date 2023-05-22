import { Dispatch, createContext, useReducer } from 'react';
import { ChildrenRoot } from '../../../types/shared';
import { Action, SettingDataActions } from './SettingsContextActions';

export type SettingsTheme = 'numbers' | 'icons';
export type SettingsPlayers = 1 | 2 | 3 | 4;
export type SettingsBoardSize = 16 | 36;

export type SettingsContextData = {
  theme: SettingsTheme;
  players: SettingsPlayers;
  boardSize: SettingsBoardSize;
};

const initialState: SettingsContextData = {
  theme: 'numbers',
  players: 1,
  boardSize: 16,
};

export const SettingsContext = createContext<{
  state: SettingsContextData;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const settingsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SettingDataActions.CHANGE_SETTINGS:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export const SettingsContextProvider = ({ children }: ChildrenRoot) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
