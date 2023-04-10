import clsx from "clsx";
import { useSelector } from "react-redux";

import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import WidgetIconWithName from "@/components/WidgetIconWithName";
import WidgetSelectionGrid from "@/components/WidgetSelectionGrid";

import { THEME_KEYS } from "@/constants/constants";
import hexToRgba from "hex-to-rgba";

function LayoutEditView(props) {
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gBackgroundImage = useSelector(selectBackgroundImage);

  const { onSelectWidget, position, selectedWidgetPosition } = props;

  const activeBorderClass = { borderWidth: "2px", borderColor: gPrimaryColor };

  const backgroundStyle =
    gBackgroundImage === undefined || gBackgroundImage === null
      ? gTheme == THEME_KEYS.SOPHISTICATED
        ? { background: `linear-gradient( rgba(26, 36, 51, 0.8), rgba(32, 71, 94, 0.8))` }
        : { backgroundColor: "#ffffff" }
      : { backgroundColor: hexToRgba(gPrimaryColor, 0.8) };

  return (
    <div
      className={clsx(
        "w-full h-full",
        gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity"
      )}
      style={
        selectedWidgetPosition === position
          ? { ...activeBorderClass, ...backgroundStyle }
          : { ...backgroundStyle }
      }
      onClick={() => onSelectWidget(position)}
    >
      {selectedWidgetPosition === position ? (
        <WidgetSelectionGrid position={position} />
      ) : (
        <WidgetIconWithName widgetType={gPageInfo.widgets[position]} />
      )}
    </div>
  );
}

export default LayoutEditView;
