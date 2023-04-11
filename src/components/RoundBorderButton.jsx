import { useSelector } from "react-redux";

import { selectCurrentTheme, selectPrimaryColor } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";

function RoundBorderButton(props) {
  const { text, highlightBorder = true, onClick } = props;

  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  return (
    <button
      className={
        "w-full button " + (gTheme == THEME_KEYS.SOPHISTICATED ? "button" : "button-simplicity")
      }
      style={{
        borderColor: highlightBorder
          ? gPrimaryColor
          : gTheme == THEME_KEYS.SOPHISTICATED
          ? "#ffffff"
          : "#8c8c8c",
        color: highlightBorder
          ? gPrimaryColor
          : gTheme == THEME_KEYS.SOPHISTICATED
          ? "#ffffff"
          : "#8c8c8c",
      }}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default RoundBorderButton;
