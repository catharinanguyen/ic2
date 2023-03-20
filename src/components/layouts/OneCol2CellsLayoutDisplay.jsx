import { useSelector } from "react-redux";

import { selectCurrentPage } from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import WidgetDisplay from "@/components/WidgetDisplay";

import { GRID_POSITIONS, WIDGET_SHAPES, WIDGET_TYPES } from "@/constants/constants";

function OneCol2CellsLayoutDisplay() {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-4 relative">
        <WidgetDisplay
          widgetType={gPageInfo.widgets[GRID_POSITIONS.FULL_COLUMN_1]}
          widgetShape={WIDGET_SHAPES.VERTICAL}
        />
      </div>
      <div className="row-span-2 relative">
        <WidgetDisplay
          widgetType={gPageInfo.widgets[GRID_POSITIONS.CELL_1_2]}
          widgetShape={WIDGET_SHAPES.CELL}
        />
      </div>
      <div className="row-span-2 relative">
        <WidgetDisplay
          widgetType={gPageInfo.widgets[GRID_POSITIONS.CELL_2_2]}
          widgetShape={WIDGET_SHAPES.CELL}
        />
      </div>
    </div>
  );
}

export default OneCol2CellsLayoutDisplay;
