import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentTheme,
  selectPrimaryColor,
  selectTextType,
  setTextType,
} from "@/store/slices/appStatusSlice";
import { THEME_KEYS } from "@/constants/constants";

function TextButton(props) {
  const { text } = props;

  const dispatch = useDispatch();

  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTextType = useSelector(selectTextType);
  const gTheme = useSelector(selectCurrentTheme);
  const buttonBorder =
    gTheme === THEME_KEYS.SOPHISTICATED
      ? { borderColor: "#fff" }
      : { borderColor: "#8C8C8C" };

  const styleActive =
    gTextType === text
      ? { borderColor: gPrimaryColor, color: gPrimaryColor }
      : {};

  return (
    <button
      className="w-full button mx-[5px]"
      style={{ ...buttonBorder, ...styleActive }}
      type="button"
      onClick={() => {
        dispatch(setTextType(text));
      }}
    >
      {text}
    </button>
  );
}

export default TextButton;
