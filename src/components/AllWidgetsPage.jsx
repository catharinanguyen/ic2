import { useDispatch, useSelector } from "react-redux";

import { selectPrimaryColor, setFullWidget } from "@/store/slices/appStatusSlice";

import WidgetIconWithName from "@/components/WidgetIconWithName";

import { WIDGET_TYPES } from "@/constants/constants";

function AllWidgetsPage() {
  const dispatch = useDispatch();

  const gPrimaryColor = useSelector(selectPrimaryColor);
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-12">
        {Object.values(WIDGET_TYPES).map(widgetType => (
          <div
            className="w-[140px]"
            key={widgetType}
          >
            <button>
              <WidgetIconWithName
                widgetType={widgetType}
                fill={gPrimaryColor}
                hasBorder={true}
                hasBackground={true}
                size={120}
                onClick={() => dispatch(setFullWidget(widgetType))}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllWidgetsPage;
