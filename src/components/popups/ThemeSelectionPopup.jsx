import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCurrentTheme, selectPrimaryColor } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";
import ThemeButton from "../ThemeButton";

function ThemeSelectionPopup({ isVisible, onClose }) {
  const [mounted, setMounted] = useState(false);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  const themeKey = Object.values(THEME_KEYS);

  const backgroundStyle =
    gTheme === THEME_KEYS.SOPHISTICATED ? "bg-gradient-to-r from-bg-card to-bg-card1" : "bg-white";

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (!isVisible) return null;
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-10"
      id="wrapper"
    >
      <div
        className={"relative w-[980px] h-[702px] p-[50px] border " + backgroundStyle}
        style={{ borderColor: gPrimaryColor }}
      >
        <button className="absolute top-[10px] left-[10px]" onClick={() => onClose()}>
          X
        </button>
        <div className="overflow-hidden">
          <div className="overflow-scroll overflow-y-hidden">
            <div className="flex w-[1500px]">
              {themeKey.map(theme => {
                return <ThemeButton key={theme} theme={theme} onClose={onClose} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectionPopup;
