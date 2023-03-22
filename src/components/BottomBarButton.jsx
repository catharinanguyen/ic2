import { selectPrimaryColor } from "@/store/slices/appStatusSlice";
import { useSelector } from "react-redux";

function BottomBarButton(props) {
  const { onClick } = props;

  const gPrimaryColor = useSelector(selectPrimaryColor);

  const fillColor = gPrimaryColor;

  return (
    <button type="button" className="h-4 mx-auto" onClick={onClick}>
      <svg
        width="174"
        height="4"
        viewBox="0 0 180 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" width="180" height="4" rx="2" fill={fillColor} />
      </svg>
    </button>
  );
}

export default BottomBarButton;
