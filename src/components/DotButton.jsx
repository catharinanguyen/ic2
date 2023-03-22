import { useDispatch, useSelector } from "react-redux";

import { selectPrimaryColor, setPage } from "@/store/slices/appStatusSlice";

function DotButton(props) {
  const { isActive = false, pageNo } = props;

  const dispatch = useDispatch();
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const fillColor = isActive ? gPrimaryColor : "#D9D9D9";

  return (
    <button
      className="p-1 m-1 rounded-full"
      onClick={() => dispatch(setPage(pageNo))}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="6" height="6" rx="3" fill={fillColor} />
      </svg>
    </button>
  );
}

export default DotButton;
