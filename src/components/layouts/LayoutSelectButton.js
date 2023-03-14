import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentPage,
  selectCurrentTheme,
} from "@/store/slices/appStatusSlice";
import { updatePageLayout } from "@/store/slices/pagesSlice";

import { LAYOUT_TYPES, THEME_KEYS } from "@/constants/constants";

function LayoutSelectButton(props) {
  const { layout, isActive } = props;

  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gTheme = useSelector(selectCurrentTheme);

  const fillColor = isActive
    ? gTheme == THEME_KEYS.SOPHISTICATED
      ? "#03DA99"
      : "#0072DE"
    : "#EEEEEE";
  const borderColor = isActive
    ? gTheme == THEME_KEYS.SOPHISTICATED
      ? "#03DA99"
      : "#0072DE"
    : "#FFFFFF00";

  let svgIcon;
  switch (layout) {
    case LAYOUT_TYPES.FOUR_CELLS:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" y="16" width="28" height="21" rx="2" fill={fillColor} />
          <rect x="41" y="16" width="28" height="21" rx="2" fill={fillColor} />
          <rect x="9" y="41" width="28" height="21" rx="2" fill={fillColor} />
          <rect x="41" y="41" width="28" height="21" rx="2" fill={fillColor} />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" y="16" width="28" height="46" rx="2" fill={fillColor} />
          <rect x="41" y="16" width="28" height="21" rx="2" fill={fillColor} />
          <rect x="41" y="41" width="28" height="21" rx="2" fill={fillColor} />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" y="16" width="60" height="21" rx="2" fill={fillColor} />
          <rect x="9" y="41" width="28" height="21" rx="2" fill={fillColor} />
          <rect x="41" y="41" width="28" height="21" rx="2" fill={fillColor} />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="28.4746"
            height="46"
            rx="2"
            transform="matrix(1 -8.59657e-08 -8.89045e-08 -1 40.5254 62)"
            fill={fillColor}
          />
          <rect
            width="27.5254"
            height="21"
            rx="2"
            transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 9 37)"
            fill={fillColor}
          />
          <rect
            width="27.5254"
            height="21"
            rx="2"
            transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 9 62)"
            fill={fillColor}
          />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="60"
            height="21"
            rx="2"
            transform="matrix(1 0 0 -1 9 62)"
            fill={fillColor}
          />
          <rect
            width="28"
            height="21"
            rx="2"
            transform="matrix(1 0 0 -1 9 37)"
            fill={fillColor}
          />
          <rect
            width="28"
            height="21"
            rx="2"
            transform="matrix(1 0 0 -1 41 37)"
            fill={fillColor}
          />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_COLS:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" y="16" width="28" height="46" rx="2" fill={fillColor} />
          <rect x="41" y="16" width="28" height="46" rx="2" fill={fillColor} />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_ROWS:
      svgIcon = (
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" y="16" width="60" height="21" rx="2" fill={fillColor} />
          <rect x="9" y="41" width="60" height="21" rx="2" fill={fillColor} />
          <path
            d="M8 2H70V-2H8V2ZM76 8V70H80V8H76ZM70 76H8V80H70V76ZM2 70V8H-2V70H2ZM8 76C4.68629 76 2 73.3137 2 70H-2C-2 75.5228 2.47715 80 8 80V76ZM76 70C76 73.3137 73.3137 76 70 76V80C75.5228 80 80 75.5228 80 70H76ZM70 2C73.3137 2 76 4.68629 76 8H80C80 2.47715 75.5228 -2 70 -2V2ZM8 -2C2.47715 -2 -2 2.47715 -2 8H2C2 4.68629 4.68629 2 8 2V-2Z"
            fill={borderColor}
          />
        </svg>
      );
      break;
    default:
      <div />;
  }

  return (
    <button
      onClick={() => {
        dispatch(
          updatePageLayout({
            pageNo: gCurrentPage,
            layout,
          })
        );
      }}
    >
      {svgIcon}
    </button>
  );
}

export default LayoutSelectButton;
