import ColorButton from "@/components/ColorButton";
import { THEMES, THEME_KEYS } from "@/constants/constants";
import {
  selectCurrentColorIndex,
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function SelectColorPanel(props) {
  const gTheme = useSelector(selectCurrentTheme);

  const primaryColors = THEMES[gTheme].colorPalette.primaryColors;

  return (
    <div>
      {primaryColors.map((color, i) => {
        return <ColorButton key={color} color={color} />;
      })}
    </div>
  );
}

export default SelectColorPanel;
