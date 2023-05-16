type SettingDataActions = {
  id: number;
  title: string;
};

export type SettingData = {
  id: number;
  title: string;
  actions: SettingDataActions[];
};

export const settingsData: SettingData[] = [
  {
    id: 1,
    title: 'Select Theme',
    actions: [
      {
        id: 1,
        title: 'Numbers',
      },
      {
        id: 2,
        title: 'Icons',
      },
    ],
  },
  {
    id: 2,
    title: 'Numbers of Players',
    actions: [
      {
        id: 1,
        title: '1',
      },
      {
        id: 2,
        title: '2',
      },
      {
        id: 3,
        title: '3',
      },
      {
        id: 4,
        title: '4',
      },
    ],
  },
  {
    id: 3,
    title: 'Select Theme',
    actions: [
      {
        id: 1,
        title: '4x4',
      },
      {
        id: 2,
        title: '6x6',
      },
    ],
  },
];
