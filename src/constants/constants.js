export const MAX_PAGES = 10;
export const MIN_PAGES = 1;

export const THEME_KEYS = {
  SOPHISTICATED: 'SOPHISTICATED',
  MODERN: 'MODERN',
  RETRO: 'RETRO',
}

export const THEMES = {
  [THEME_KEYS.SOPHISTICATED]: {
    name: 'Sophisticated',
  },
  [THEME_KEYS.MODERN]: {
    name: 'Modern',
  },
  [THEME_KEYS.RETRO]: {
    name: 'Retro',
  },
}

export const LAYOUT_TYPES = {
  ONE_COL_TWO_CELLS: 'ONE_COL_TWO_CELLS',
  TWO_CELLS_ONE_COL: 'TWO_CELLS_ONE_COL',
  TWO_ROWS: 'TWO_ROWS',
  TWO_COLS: 'TWO_COLS',
  ONE_ROW_TWO_CELLS: 'ONE_ROW_TWO_CELLS',
  TWO_CELLS_ONE_ROW: 'TWO_CELLS_ONE_ROW',
  FOUR_CELLS: 'FOUR_CELLS',
}

export const WIDGET_TYPES = {
  AGENDA: 'AGENDA',
  AUDIO: 'AUDIO',
  COMPASS: 'COMPASS',
  LIST: 'LIST',
  MAP: 'MAP',
  MESSAGES: 'MESSAGES',
  MUSIC: 'MUSIC',
  PHONE: 'PHONE',
  WEATHER: 'WEATHER',
}

export const GRID_POSITIONS = {
  FULL_COLUMN_1: 'FULL_COLUMN_1',
  FULL_COLUMN_2: 'FULL_COLUMN_2',
  FULL_ROW_1: 'FULL_ROW_1',
  FULL_ROW_2: 'FULL_ROW_2',
  CELL_1_1: 'CELL_1_1', // row 1 column 1
  CELL_1_2: 'CELL_1_2', // row 1 column 2
  CELL_2_1: 'CELL_2_1', // row 2 column 1
  CELL_2_2: 'CELL_2_2', // row 2 column 2
}
