import { isEmpty } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { capitalize } from "lodash";

import {
  PLAYER_STATES,
  TEXT_TYPES,
  THEMES,
  THEME_KEYS,
  VOICE_STATUS,
} from "@/constants/constants";

import songs from "../../data/songs.json";

const initialState = {
  theme: THEME_KEYS.SOPHISTICATED,
  currentPage: 1,
  fullWidget: null,
  primaryColor: THEMES[THEME_KEYS.SOPHISTICATED].colorPalette.primaryColors[0],
  textType: capitalize(TEXT_TYPES.COMPACT),
  backgroundImage: null,
  playerState: PLAYER_STATES.PAUSE,
  songId: songs[0].id,
  voiceStatus: VOICE_STATUS.ON,
};

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.currentPage = state.currentPage + 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTheme: (state, action) => {
      const theme = action.payload;
      state.theme = theme;
      if (isEmpty(state.backgroundImage)) {
        const primaryColor = THEMES[theme].colorPalette.primaryColors[0];
        state.primaryColor = primaryColor;
      }
    },
    setFullWidget: (state, action) => {
      state.fullWidget = action.payload;
    },
    resetFullWidget: (state, action) => {
      state.fullWidget = null;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setTextType: (state, action) => {
      state.textType = action.payload;
    },
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
    setPlayerState: (state, action) => {
      state.playerState = action.payload;
    },
    setSongId: (state, action) => {
      state.songId = action.payload;
    },
    setVoiceStatus: (state, action) => {
      state.voiceStatus = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

export const {
  nextPage,
  setPage,
  setTheme,
  setColor,
  setTextType,
  setPrimaryColor,
  setBackgroundImage,
  setFullWidget,
  resetFullWidget,
  setPlayerState,
  setSongId,
  setVoiceStatus,
} = appStatusSlice.actions;
export const selectCurrentPage = (state) => state.appStatus.currentPage;
export const selectCurrentTheme = (state) => state.appStatus.theme;
export const selectFullWidget = (state) => state.appStatus.fullWidget;
export const selectPrimaryColor = (state) => state.appStatus.primaryColor;
export const selectTextType = (state) => state.appStatus.textType;
export const selectBackgroundImage = (state) => state.appStatus.backgroundImage;
export const selectPlayerState = (state) => state.appStatus.playerState;
export const selectCurrentSongId = (state) => state.appStatus.songId;
export const selectCurrentVoiceStatus = (state) => state.appStatus.voiceStatus;
export default appStatusSlice.reducer;
