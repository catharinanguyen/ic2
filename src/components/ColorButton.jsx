import { THEME_KEYS } from "@/constants/constants";
import {
  selectCurrentTheme,
  selectPrimaryColor,
  setPrimaryColor,
} from "@/store/slices/appStatusSlice";
import { useDispatch, useSelector } from "react-redux";

function ColorButton(props) {
  const { color } = props;
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const dispatch = useDispatch();
  const gTheme = useSelector(selectCurrentTheme);
  console.log(color);

  const styleActive =
    gPrimaryColor == color
      ? gTheme === THEME_KEYS.SOPHISTICATED
        ? { borderColor: "white" }
        : {
            borderColor: "white",
            outlineWidth: "2px",
            outlineStyle: "solid",
            outlineColor: color,
          }
      : {
          borderColor: "transparent",
        };

  return (
    <button
      className={
        "colors-green radius-[8px] w-[64px] h-[64px] portrait:w-[5.424vw] portrait:h-[5.424vw] rounded-[8px] mr-[20px]"
      }
      style={{ backgroundColor: color, border: "4px solid", ...styleActive }}
      onClick={() => {
        dispatch(setPrimaryColor(color));
      }}
    />
  );
}

export default ColorButton;
