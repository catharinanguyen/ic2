import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentPage,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo, switchWidget } from "@/store/slices/pagesSlice";

import WidgetSvgIconSelectButton from "@/components/WidgetSvgIconSelectButton";

import { WIDGET_TYPES } from "@/constants/constants";

function WidgetSelectionGrid(props) {
  const dispatch = useDispatch();
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gPrimaryColor = useSelector(selectPrimaryColor);

  const { position } = props;
  const currentWidget = gPageInfo.widgets[position];

  const handleSelectWidget = (widgetType) => {
    dispatch(
      switchWidget({
        pageNo: gCurrentPage,
        position,
        widgetType,
      })
    );
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-transparent w-fit h-fit m-auto ">
      {Object.values(WIDGET_TYPES).map((widgetType) => {
        return (
          <WidgetSvgIconSelectButton
            key={widgetType}
            type={widgetType}
            onClick={() => handleSelectWidget(widgetType)}
            fill={currentWidget === widgetType ? gPrimaryColor : undefined}
          />
        );
      })}
    </div>
  );
}

export default WidgetSelectionGrid;
