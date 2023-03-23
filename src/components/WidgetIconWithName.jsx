import { useSelector } from "react-redux";
import { capitalize } from "lodash";

import { selectCurrentTheme } from "@/store/slices/appStatusSlice";

import { getWidgetSvgIconByType } from "@/utils/widgetUtils";

import { THEME_KEYS } from "@/constants/constants";

function WidgetIconWithName(props) {
  const {
    widgetType,
    fill,
    hasBorder = false,
    hasBackground = false,
    onClick,
    size,
  } = props;

  const gTheme = useSelector(selectCurrentTheme);

  const background = hasBackground
    ? (gTheme == THEME_KEYS.SOPHISTICATED
      ? "bg-gradient-to-b from-[#1a2433] to-[#20475e]"
      : "bg-white shadow")
    : "";

  const svgIcon = getWidgetSvgIconByType({
    widgetType,
    fill,
    size,
  });

  return (
    <div className="flex-col justify-center items-center">
      <button
        className={`${background}`}
        style={{
          border: hasBorder && gTheme == THEME_KEYS.SOPHISTICATED ? `3px solid ${fill}` : 'none',
          borderRadius: hasBorder ? `8px` : '0',
        }}
        onClick={onClick || function () { }}
      >
        {svgIcon}
      </button>
      <div className="text-center text-[#CABFB9]">{capitalize(widgetType)}</div>
    </div>
  );
}

export default WidgetIconWithName;
