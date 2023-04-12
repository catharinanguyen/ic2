import clsx from "clsx";
import { useSelector } from "react-redux";

import {
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";

import { getWidgetSvgIconByType } from "@/utils/widgetUtils";

import { THEME_KEYS } from "@/constants/constants";

function WidgetSvgIconSelectButton(props) {
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);

  const { type, fill, onClick, disabled = false } = props;

  const activeBorderClass =
    gTheme == THEME_KEYS.SOPHISTICATED
      ? {
        borderWidth: "2px",
        borderColor: gPrimaryColor,
        borderRadius: "6px",
      }
      : { backgroundColor: "#EFEFEF", borderRadius: "6px" };

  const svgIcon = getWidgetSvgIconByType({
    widgetType: type,
    fill: disabled ? `${fill || '#CABFB9'}22` : fill,
  });

  return (
    <div
      onClick={(e) => {
        if (disabled) {
          e.stopPropagation();
        }
      }}
    >
      <button
        className={clsx(
          "bg-transparent w-fit h-fit",
        )}
        style={fill ? { ...activeBorderClass } : {}}
        onClick={onClick}
        disabled={disabled}
      >
        {svgIcon}
      </button>
    </div>
  );
}

export default WidgetSvgIconSelectButton;
