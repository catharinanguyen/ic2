import WidgetDisplay from "@/components/WidgetDisplay";
import { WIDGET_SHAPES, WIDGET_TYPES } from "@/constants/constants";

function TwoRowsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="col-span-2 row-span-2 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.MAP}
          widgetShape={WIDGET_SHAPES.HORIZONTAL}
        />
      </div>
      <div className="col-span-2 row-span-2 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.WEATHER}
          widgetShape={WIDGET_SHAPES.HORIZONTAL}
        />
      </div>
    </div>
  );
}

export default TwoRowsLayoutDisplay;
