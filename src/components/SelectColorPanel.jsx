import { useSelector } from "react-redux";

import { selectCurrentTheme } from "@/store/slices/appStatusSlice";

import ColorButton from "@/components/ColorButton";

import { THEMES } from "@/constants/constants";

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
