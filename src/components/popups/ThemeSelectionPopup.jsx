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

  const fillColor = gTheme === THEME_KEYS.SOPHISTICATED ? "#ffffff" : "#141524";

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
        <button className="absolute top-[15px] left-[15px]" onClick={() => onClose()}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.38918 27.1392L3.74274 27.4927L4.09629 27.1392L14.3272 16.9083L24.4946 27.1381L24.8481 27.4938L25.2028 27.1392L26.9455 25.3964L27.298 25.0439L26.9466 24.6904L16.7114 14.3928L26.9466 4.09522L27.298 3.74167L26.9455 3.38919L25.2028 1.64645L24.8471 1.29073L24.4935 1.64861L14.3272 11.9397L4.09736 1.64752L3.74381 1.29182L3.38918 1.64645L1.64645 3.38919L1.29397 3.74167L1.64537 4.09522L11.8806 14.3928L1.64537 24.6904L1.29397 25.0439L1.64645 25.3964L3.38918 27.1392Z"
              fill={fillColor}
              stroke="white"
            />
          </svg>
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
