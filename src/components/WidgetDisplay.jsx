import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";

import {
  selectBackgroundImage,
  selectCurrentTheme,
  selectPrimaryColor,
  setFullWidget,
} from "@/store/slices/appStatusSlice";
import { THEME_KEYS, WIDGET_SHAPES, WIDGET_TYPES } from "@/constants/constants";
import Player from "./Player";
import VoiceMapDirectionButton from "./VoiceMapDirectionButton";
import SearchMapButton from "./SearchMapButton";
import CompassMapButton from "./CompassMapButton";

function WidgetDisplay(props) {
  const { widgetType, widgetShape } = props;

  const dispatch = useDispatch();

  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  let widgetTheme;
  if (gBackgroundImage === undefined || gBackgroundImage === null) {
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
  } else {
    widgetTheme =
      gTheme === THEME_KEYS.SOPHISTICATED ? "sophisticated-wallpaper" : "modern-wallpaper";
  }

  if (!widgetType) {
    return <div />;
  }

  const imageSrc = `/images/${widgetType.toLowerCase()}-widget-${widgetShape.toLowerCase()}-${widgetTheme}.jpg`;

  const renderContent = () => {
    if (widgetType == WIDGET_TYPES.AUDIO || widgetType == WIDGET_TYPES.MUSIC) {
      return (
        <div>
          <Player widgetType={widgetType} widgetShape={widgetShape} />
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
        </div>
      );
    }
    if (widgetType == WIDGET_TYPES.MAP) {
      return (
        <div>
          <div
            className={
              "absolute flex z-10 " +
              (widgetShape === WIDGET_SHAPES.CELL
                ? gTheme === THEME_KEYS.MODERN
                  ? "right-[50%] translate-x-2/4 flex-row bottom-[12px] space-x-3"
                  : "bottom-[50%] translate-y-[76%] right-[50%] translate-x-2/4 flex-row space-x-3"
                : "right-[12px] bottom-[50%] translate-y-2/4 flex-col space-y-3 ")
            }
          >
            <SearchMapButton />
            <VoiceMapDirectionButton />
            <CompassMapButton />
          </div>
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
        </div>
      );
    }
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
  };

  return renderContent();
}

export default WidgetDisplay;
