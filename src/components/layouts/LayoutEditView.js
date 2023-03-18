import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectCurrentPage, selectCurrentTheme } from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import WidgetIconWithName from "@/components/WidgetIconWithName";
import WidgetSelectionGrid from "@/components/WidgetSelectionGrid";

import { THEME_KEYS } from "@/constants/constants";

function LayoutEditView(props) {
  const gTheme = useSelector(selectCurrentTheme);
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  const { onSelectWidget, position, selectedWidgetPosition } = props;

  const activeBorderClass = gTheme == THEME_KEYS.SOPHISTICATED
    ? `border-2 border-[#04D5B7]`
    : `border-2 border-[#0072DE]`;

  return (
    <div
      className={clsx(
        'w-full h-full',
        gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity",
        selectedWidgetPosition === position ? activeBorderClass : '',
      )}
      onClick={() => onSelectWidget(position)}
    >
      {
        selectedWidgetPosition === position
          ? <WidgetSelectionGrid position={position} />
          : <WidgetIconWithName widgetType={gPageInfo.widgets[position]} />
      }
    </div>
  );
}

export default LayoutEditView;
