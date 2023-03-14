import { THEME_KEYS } from "@/constants/constants";
import { setTheme } from "@/store/slices/appStatusSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

import images from "../../../public/images";

function ThemeSelectionPopup({ isVisible, onClose }) {
  const dispatch = useDispatch();

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-10"
      id="wrapper"
    >
      <div className="bg-gradient-to-r from-bg-card to-bg-card1 relative w-[980px] h-[702px] p-[50px] border border-border_green">
        <button
          className="absolute top-[10px] left-[10px]"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="overflow-hidden">
          <div className="overflow-scroll overflow-y-hidden">
            <div className="flex w-[1500px]">
              <div
                className="max-w-[770px] mr-[64px]"
                value={THEME_KEYS.SOPHISTICATED}
                onClick={() => {
                  dispatch(setTheme(THEME_KEYS.SOPHISTICATED));
                  onClose();
                }}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Sophisticated
                </h2>
                <div className="border-4 border-border_green">
                  <Image src={images.SophisticatedTheme} alt="Sophisticated" />
                </div>
              </div>
              <div
                className="max-w-[770px] mr-[64px]"
                value={THEME_KEYS.MODERN}
                onClick={() => {
                  dispatch(setTheme(THEME_KEYS.MODERN));
                  onClose();
                }}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Modern
                </h2>
                <div className="border-4 border-border_green">
                  <Image src={images.ModernTheme} alt="Modern" />
                </div>
              </div>
              {/* TODO: temporarily hide this */}
              {/* <div
                className="max-w-[770px]"
                value="Sophisticated"
                onClick={() => {}}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Retro
                </h2>
                <div className="border border-border_green">
                  <Image src={images.RetroTheme} alt="Retro" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSelectionPopup;