import { COLOR_KEYS, THEME_KEYS } from "@/constants/constants";
import {
  selectCurrentColor,
  selectCurrentTheme,
  setColor,
} from "@/store/slices/appStatusSlice";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ColorSelectButton(props) {
  const { themes, currentTheme } = props;

  const dispatch = useDispatch();
  const gTheme = useSelector(selectCurrentTheme);
  const gColor = useSelector(selectCurrentColor);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const fillColor =
    gTheme == THEME_KEYS.SOPHISTICATED ? "bg-green " : "bg-blue_simplicity ";

  active
    ? gTheme == THEME_KEYS.SOPHISTICATED
      ? "border-4 border-white"
      : "border-4 border-white outline"
    : "";

  const fillSeCondColor =
    gTheme == THEME_KEYS.SOPHISTICATED ? "bg-blue " : "bg-pink_simplicity ";

  let colorDisplay;
  let colorSecondDisplay;
  let defaultTheme;
  switch (themes) {
    case THEME_KEYS.SOPHISTICATED:
      setTheme(gColor);
      colorDisplay = setColor(COLOR_KEYS.SOPHISTICATED_GREEN);
      colorSecondDisplay = setColor(COLOR_KEYS.SOPHISTICATED_BLUE);
      break;
    case THEME_KEYS.MODERN:
      setTheme(gColor);
      colorDisplay = setColor(COLOR_KEYS.MODERN_BLUE);
      colorSecondDisplay = setColor(COLOR_KEYS.MODERN_PINK);
      break;
    default:
      colorDisplay = setColor(COLOR_KEYS.SOPHISTICATED_GREEN);
  }

  return (
    <div>
      <button
        className={
          "colors-green radius-[8px] w-[64px] h-[64px] rounded-[8px] mr-[20px] " +
          fillColor +
          active
        }
        value={theme}
        onClick={() => {
          {
            dispatch(colorDisplay);
            setTheme(gColor);
          }
        }}
      ></button>
      <button
        type="button"
        className={
          "colors-green radius-[8px] w-[64px] h-[64px] rounded-[8px] " +
          fillSeCondColor +
          active
        }
        value={gColor}
        onClick={() => {
          {
            dispatch(colorSecondDisplay);
            setTheme(gColor);
          }
        }}
      ></button>
    </div>
  );
}

export default ColorSelectButton;
