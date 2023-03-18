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
  PHONE: 'PHONE',
  MAP: 'MAP',
  MUSIC: 'MUSIC',
  LIST: 'LIST',
  WEATHER: 'WEATHER',
  AUDIO: 'AUDIO',
  AGENDA: 'AGENDA',
  MESSAGES: 'MESSAGES',
  COMPASS: 'COMPASS',
}

export const WIDGET_SHAPES = {
  VERTICAL: 'VERTICAL',
  HORIZONTAL: 'HORIZONTAL',
  CELL: 'CELL',
  FULL: 'FULL',
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

export const LAYOUT_EDIT_CONFIG = {
  [LAYOUT_TYPES.ONE_COL_TWO_CELLS]: [
    {
      position: GRID_POSITIONS.FULL_COLUMN_1,
      className: 'row-span-4',
    },
    {
      position: GRID_POSITIONS.CELL_1_2,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_2_2,
      className: 'row-span-2',
    },
  ],
  [LAYOUT_TYPES.ONE_ROW_TWO_CELLS]: [
    {
      position: GRID_POSITIONS.FULL_ROW_1,
      className: 'row-span-2 col-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_2_1,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_2_2,
      className: 'row-span-2',
    },
  ],
  [LAYOUT_TYPES.TWO_CELLS_ONE_COL]: [
    {
      position: GRID_POSITIONS.CELL_1_1,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.FULL_COLUMN_2,
      className: 'row-span-4',
    },
    {
      position: GRID_POSITIONS.CELL_2_1,
      className: 'row-span-2',
    },
  ],
  [LAYOUT_TYPES.TWO_CELLS_ONE_ROW]: [
    {
      position: GRID_POSITIONS.CELL_1_1,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_1_2,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.FULL_ROW_2,
      className: 'row-span-2 col-span-2',
    },
  ],
  [LAYOUT_TYPES.TWO_ROWS]: [
    {
      position: GRID_POSITIONS.FULL_ROW_1,
      className: 'col-span-2 row-span-2',
    },
    {
      position: GRID_POSITIONS.FULL_ROW_2,
      className: 'col-span-2 row-span-2',
    },
  ],
  [LAYOUT_TYPES.TWO_COLS]: [
    {
      position: GRID_POSITIONS.FULL_COLUMN_1,
      className: 'row-span-4',
    },
    {
      position: GRID_POSITIONS.FULL_COLUMN_2,
      className: 'row-span-4',
    },
  ],
  [LAYOUT_TYPES.FOUR_CELLS]: [
    {
      position: GRID_POSITIONS.CELL_1_1,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_1_2,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_2_1,
      className: 'row-span-2',
    },
    {
      position: GRID_POSITIONS.CELL_2_2,
      className: 'row-span-2',
    },
  ],
}
