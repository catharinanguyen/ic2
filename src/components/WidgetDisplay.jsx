import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";

import {
  selectCurrentTheme,
  selectPrimaryColor,
  setFullWidget,
} from "@/store/slices/appStatusSlice";
import { THEME_KEYS } from "@/constants/constants";

function WidgetDisplay(props) {
  const { widgetType, widgetShape } = props;

  const dispatch = useDispatch();

  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  let widgetTheme;
  switch (gPrimaryColor) {
    case "#04D5B7":
      widgetTheme = "dark";
      break;
    case "#0056FE":
      widgetTheme = "sophisticated-blue";
      break;
    case "#0072DE":
      widgetTheme = "light";
      break;
    case "#FF3366":
      widgetTheme = "modern-pink";
      break;
    default:
      widgetTheme = gTheme === THEME_KEYS.SOPHISTICATED ? "dark" : "light";
      break;
  }

  if (!widgetType) {
    return <div />;
  }

  const imageSrc = `/images/${widgetType.toLowerCase()}-widget-${widgetShape.toLowerCase()}-${widgetTheme}.jpg`;

  return (
    <Image
      src={imageSrc}
      fill
      style={
        gTheme === THEME_KEYS.SOPHISTICATED
          ? {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: gPrimaryColor,
          }
          : { borderRadius: "0.375rem" }
      }
      onClick={() => dispatch(setFullWidget(widgetType))}
      alt={capitalize(widgetType)}
    />
  );
}

export default WidgetDisplay;
