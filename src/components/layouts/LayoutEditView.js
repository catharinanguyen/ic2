import clsx from "clsx";
import { useSelector } from "react-redux";

import {
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import WidgetIconWithName from "@/components/WidgetIconWithName";
import WidgetSelectionGrid from "@/components/WidgetSelectionGrid";

import { THEME_KEYS } from "@/constants/constants";

function LayoutEditView(props) {
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  const { onSelectWidget, position, selectedWidgetPosition } = props;

  const activeBorderClass = { borderWidth: "2px", borderColor: gPrimaryColor };

  return (
    <div
      className={clsx(
        "w-full h-full",
        gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity"
      )}
      style={
        selectedWidgetPosition === position ? { ...activeBorderClass } : {}
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
