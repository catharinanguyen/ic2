import { selectCurrentTheme, selectPrimaryColor, setTheme } from "@/store/slices/appStatusSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";

const ThemeButton = props => {
  const { theme, onClose } = props;
  const dispatch = useDispatch();
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  const borderStyle =
    theme === gTheme ? { borderColor: gPrimaryColor } : { borderColor: "transparent" };

  return (
    <div
      className="max-w-[770px] mr-[64px]"
      value={theme}
      onClick={() => {
        dispatch(setTheme(theme));
        onClose(onClose);
      }}
    >
      <h2 className="text-[24px] font-semibold mb-[30px] text-center">{capitalize(theme)}</h2>
      <div className="border-4 w-[770px] portrait:w-[63.559vw]" style={borderStyle}>
        <Image src={`/images/${theme.toLowerCase()}.png`} alt={theme} width={770} height={541} />
      </div>
    </div>
  );
};

export default ThemeButton;
