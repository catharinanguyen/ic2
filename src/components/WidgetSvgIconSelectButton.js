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

  const { type, fill, onClick } = props;

  const activeBorderClass =
    gTheme == THEME_KEYS.SOPHISTICATED
      ? {
          borderWidth: "2px",
          borderColor: gPrimaryColor,
          borderRadius: "6px",
        }
      : { backgroundColor: "#EFEFEF", borderRadius: "6px" };

  const svgIcon = getWidgetSvgIconByType(type, fill);

  return (
    <button
      className={clsx("bg-transparent w-fit h-fit")}
      style={fill ? { ...activeBorderClass } : {}}
      onClick={onClick}
    >
      {svgIcon}
    </button>
  );
}

export default WidgetSvgIconSelectButton;
