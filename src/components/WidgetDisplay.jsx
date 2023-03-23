import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";

import {
  selectPrimaryColor,
  setFullWidget,
} from "@/store/slices/appStatusSlice";

function WidgetDisplay(props) {
  const { widgetType, widgetShape } = props;

  const dispatch = useDispatch();

  const gPrimaryColor = useSelector(selectPrimaryColor);

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
      widgetTheme = "dark";
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
      onClick={() => dispatch(setFullWidget(widgetType))}
      alt={capitalize(widgetType)}
    />
  );
}

export default WidgetDisplay;
