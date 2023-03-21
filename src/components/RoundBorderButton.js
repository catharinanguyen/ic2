import { useSelector } from "react-redux";

import { selectCurrentTheme, selectPrimaryColor } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";

function RoundBorderButton(props) {
  const { text, onClick } = props;

  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);

  return (
    <button
      className={
        "w-full border-th-primary button " +
        (gTheme == THEME_KEYS.SOPHISTICATED ? "" : "text-th-primary")
      }
      style={{ borderColor: gPrimaryColor }}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default RoundBorderButton;
