import { useSelector } from "react-redux";

import { selectCurrentPage } from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import { getWidgetShapeByPosition } from "@/utils/widgetUtils";

import WidgetDisplay from "@/components/WidgetDisplay";

import { LAYOUT_EDIT_CONFIG } from "@/constants/constants";

function LayoutDisplay(props) {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  const { layout: layoutType } = gPageInfo;

  const layoutConfig = LAYOUT_EDIT_CONFIG[layoutType];

  if (!layoutConfig) {
    return <div />;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 px-1 pt-3 pb-[50px] mx-auto box-border h-full">
      {layoutConfig.map(item => {
        const { position } = item;
        const className = `${item.className} relative`;
        const widgetShape = getWidgetShapeByPosition(position);
        return (
          <div className={className} key={position}>
            <WidgetDisplay widgetType={gPageInfo.widgets[position]} widgetShape={widgetShape} />
          </div>
        );
      })}
    </div>
  );
}

export default LayoutDisplay;
