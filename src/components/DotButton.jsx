import { useDispatch, useSelector } from "react-redux";

import { selectCurrentTheme, setPage } from "@/store/slices/appStatusSlice";
import { THEME_KEYS } from "@/constants/constants";

function DotButton(props) {
  const { isActive = false, pageNo } = props;

  const dispatch = useDispatch();
  const gTheme = useSelector(selectCurrentTheme);

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
        <rect
          width="6"
          height="6"
          rx="3"
          fill={
            isActive
              ? gTheme == THEME_KEYS.SOPHISTICATED
                ? "#04D5B7"
                : "#0072DE"
              : "#CABFB9"
          }
        />
      </svg>
    </button>
  );
}

export default DotButton;
