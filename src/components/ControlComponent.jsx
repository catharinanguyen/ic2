import { TEXT_TYPES } from "@/constants/constants";
import { selectTextType } from "@/store/slices/appStatusSlice";
import { capitalize } from "lodash";
import { useSelector } from "react-redux";

const ControlComponent = ({ children, title }) => {
  const gTextType = useSelector(selectTextType);
  const styleActiveText = gTextType == capitalize(TEXT_TYPES.COMPACT) ? "" : "text-[1.595vw]";
  const styleActiveTitle =
    gTextType == capitalize(TEXT_TYPES.COMPACT) ? "text-[1.595vw]" : "text-[1.795vw]";

  return (
    <div className={"mb-[1.271vw] " + styleActiveText}>
      <h3 className={"font-semibold leading-[2.542vw] " + styleActiveTitle}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default ControlComponent;
