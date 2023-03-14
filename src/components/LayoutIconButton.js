import { LAYOUT_TYPES } from "@/constants/constants";

function LayoutIconButton(props) {
  const { layout, isActive, onClick } = props;

  let svgIcon;
  switch (layout) {
    case LAYOUT_TYPES.FOUR_CELLS:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="3" width="29" height="29" fill="#EEEEEE" />
          <rect x="32" y="3" width="29" height="29" fill="#6F6F6F" />
          <rect x="3" y="32" width="29" height="29" fill="#4E4E4E" />
          <rect x="32" y="32" width="29" height="29" fill="#EEEEEE" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="3" width="29" height="58" fill="#F8F8F8" />
          <rect x="32" y="3" width="29" height="29" fill="#6F6F6F" />
          <rect x="32" y="32" width="29" height="29" fill="#4E4E4E" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>

      );
      break;
    case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="32" width="29" height="29" fill="#6F6F6F" />
          <rect x="32" y="32" width="29" height="29" fill="#4E4E4E" />
          <rect x="3" y="3" width="58" height="29" fill="#EEEEEE" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="3" width="29" height="29" fill="#EEEEEE" />
          <rect x="3" y="32" width="29" height="29" fill="#4E4E4E" />
          <rect x="32" y="3" width="29" height="58" fill="#6F6F6F" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="3" width="29" height="29" fill="#EEEEEE" />
          <rect x="32" y="3" width="29" height="29" fill="#6F6F6F" />
          <rect x="3" y="32" width="58" height="29" fill="#4E4E4E" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_COLS:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="61" y="3" width="58" height="29" transform="rotate(90 61 3)" fill="#6F6F6F" />
          <rect x="32" y="3" width="58" height="29" transform="rotate(90 32 3)" fill="#EEEEEE" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    case LAYOUT_TYPES.TWO_ROWS:
      svgIcon = (
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.75" y="2.75" width="58.5" height="58.5" rx="5.25" fill="#D9D9D9" stroke="white" stroke-width="5.5" />
          <rect x="3" y="3" width="58" height="29" fill="#EEEEEE" />
          <rect x="3" y="32" width="58" height="29" fill="#6F6F6F" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 4L8 4C5.79086 4 4 5.79086 4 8L4 56C4 58.2091 5.79086 60 8 60L56 60C58.2091 60 60 58.2091 60 56L60 8C60 5.79086 58.2091 4 56 4ZM8 0C3.58172 0 0 3.58172 0 8L0 56C0 60.4183 3.58172 64 8 64L56 64C60.4183 64 64 60.4183 64 56L64 8C64 3.58172 60.4183 0 56 0L8 0Z" fill={isActive ? "#03DA99" : "#D9D9D9"} />
        </svg>
      );
      break;
    default:
      svgIcon = <div />;
  }

  return (
    <button
      className="w-[50px] mx-2 object-fill"
      type="button"
      onClick={onClick}
    >
      {svgIcon}
    </button>
  );
}

export default LayoutIconButton;
