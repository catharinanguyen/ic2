import { TEXT_TYPES } from "@/constants/constants";
import { selectTextType } from "@/store/slices/appStatusSlice";
import { capitalize } from "lodash";
import { useSelector } from "react-redux";

const ControlComponent = ({ children, title }) => {
  const gTextType = useSelector(selectTextType);
  const styleActiveText =
    gTextType == capitalize(TEXT_TYPES.COMPACT) ? "" : "text-[20px]";
  const styleActiveTitle =
    gTextType == capitalize(TEXT_TYPES.COMPACT) ? "text-[20px]" : "text-[24px]";

  return (
    <div className={"mb-[15px] " + styleActiveText}>
      <h3 className={"font-semibold leading-[30px] " + styleActiveTitle}>
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default ControlComponent;