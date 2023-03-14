import WidgetDisplay from "@/components/WidgetDisplay";
import { WIDGET_SHAPES, WIDGET_TYPES } from "@/constants/constants";

function OneRowTwoCellsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-2 col-span-2 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.MAP}
          widgetShape={WIDGET_SHAPES.HORIZONTAL}
        />
      </div>
      <div className="row-span-2 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.AGENDA}
          widgetShape={WIDGET_SHAPES.CELL}
        />
      </div>
      <div className="row-span-2 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.MUSIC}
          widgetShape={WIDGET_SHAPES.CELL}
        />
      </div>
    </div>
  );
}

export default OneRowTwoCellsLayoutDisplay;
