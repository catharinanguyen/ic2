import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentTheme, setFullWidget } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";
import { capitalize } from "lodash";

function WidgetDisplay(props) {
  const { widgetType, widgetShape } = props;

  const dispatch = useDispatch();

  const gTheme = useSelector(selectCurrentTheme);

  const widgetTheme = gTheme === THEME_KEYS.SOPHISTICATED ? 'dark' : 'light';

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
