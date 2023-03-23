import { useDispatch, useSelector } from "react-redux";

import {
  resetFullWidget,
  selectFullWidget,
} from "@/store/slices/appStatusSlice";

import WidgetDisplay from "@/components/WidgetDisplay";
import CloseButton from "@/components/CloseButton";

import { WIDGET_SHAPES } from "@/constants/constants";

function FullWidgetDisplay() {
  const dispatch = useDispatch();

  const gFullWidget = useSelector(selectFullWidget);

  return (
    <div className="w-[842px] h-[800px] m-auto mb-2 box-border relative overflow-hidden ">
      <WidgetDisplay
        widgetType={gFullWidget}
        widgetShape={WIDGET_SHAPES.FULL}
      />
      <div className="absolute left-0 top-0">
        <CloseButton onClick={() => dispatch(resetFullWidget())} />
      </div>
    </div>
  );
}

export default FullWidgetDisplay;
