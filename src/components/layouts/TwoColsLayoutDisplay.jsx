import WidgetDisplay from "@/components/WidgetDisplay";
import { WIDGET_SHAPES, WIDGET_TYPES } from "@/constants/constants";

function TwoColsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-4 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.MAP}
          widgetShape={WIDGET_SHAPES.VERTICAL}
        />
      </div>
      <div className="row-span-4 relative">
        <WidgetDisplay
          widgetType={WIDGET_TYPES.MUSIC}
          widgetShape={WIDGET_SHAPES.VERTICAL}
        />
      </div>
    </div>
  );
}

export default TwoColsLayoutDisplay;
