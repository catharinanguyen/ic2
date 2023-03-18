import { getWidgetSvgIconByType } from "@/utils/widgetUtils";
import { capitalize } from "lodash";

function WidgetIconWithName(props) {
  const { widgetType } = props;
  const svgIcon = getWidgetSvgIconByType(widgetType);
  return (
    <div className="flex-col justify-center items-center">
      {svgIcon}
      <div className="text-center text-[#CABFB9]">{capitalize(widgetType)}</div>
    </div>
  );
}

export default WidgetIconWithName;
