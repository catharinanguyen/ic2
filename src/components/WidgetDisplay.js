import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";

import { selectCurrentTheme, setFullWidget } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";

function WidgetDisplay(props) {
  const { widgetType, widgetShape } = props;

  const dispatch = useDispatch();

  const gTheme = useSelector(selectCurrentTheme);

  const widgetTheme = gTheme === THEME_KEYS.SOPHISTICATED ? 'dark' : 'light';

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
