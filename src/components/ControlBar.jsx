import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import * as Vibrant from "node-vibrant";
import { capitalize } from "lodash";

import { selectPageInfo } from "@/store/slices/pagesSlice";
import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
  setBackgroundImage,
  setPrimaryColor,
} from "@/store/slices/appStatusSlice";

import ThemeSelectionPopup from "./popups/ThemeSelectionPopup";

import LayoutSelectButton from "@/components/layouts/LayoutSelectButton";
import RoundBorderButton from "@/components/RoundBorderButton";
import SelectColorPanel from "@/components/SelectColorPanel";

import { LAYOUT_TYPES, THEMES, THEME_KEYS } from "@/constants/constants";

const ControlBar = () => {
  const hiddenFileInput = React.useRef(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  const [showThemesSelectionPopup, setShowThemesSelectionPopup] = useState(false);
  const [wallpaperUrl, setWallpaperURL] = useState(null);

  const handleUploadImage = () => {
    hiddenFileInput.current.click();
  }

  useEffect(() => {
    if (!wallpaperUrl) {
      return;
    }
    var vibrant = new Vibrant(wallpaperUrl);
    vibrant.getPalette().then((palette) => {
      dispatch(setPrimaryColor(palette['Vibrant'].hex));
    });
  }, [wallpaperUrl, dispatch]);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      setWallpaperURL(imageUrl);
      dispatch(setBackgroundImage(imageUrl));
    }
  };

  return (
    <div className="relative pb-[0px]">
      <div className="mb-[15px]">
        <h3 className="font-semibold">Themes</h3>
        <div>
          <RoundBorderButton
            text={capitalize(gTheme)}
            onClick={() => setShowThemesSelectionPopup(true)}
          />
          <ThemeSelectionPopup
            isVisible={showThemesSelectionPopup}
            onClose={() => setShowThemesSelectionPopup(false)}
          />
        </div>
      </div>
      <div className="mb-[15px]">
        <h3 className="font-semibold">Text size</h3>
        <div className="flex">
          <button
            className={
              "text-[16px] px-6 mr-[10px] " +
              (gTheme == THEME_KEYS.SOPHISTICATED
                ? "button"
                : "button-simplicity")
            }
            type="button"
          >
            Compact
          </button>
          <button
            className={
              "text-[16px] px-6 mr-[10px] " +
              (gTheme == THEME_KEYS.SOPHISTICATED
                ? "button"
                : "button-simplicity")
            }
            type="button"
          >
            Comfortable
          </button>
        </div>
      </div>
      <div className="mb-[15px]">
        <h3 className="font-semibold">Wallpaper</h3>
        <RoundBorderButton
          text="Upload image"
          highlightBorder={false}
          onClick={() => handleUploadImage()}
        />
        <input
          ref={hiddenFileInput}
          type="file"
          name="myImage"
          onChange={uploadToClient}
          style={{ display: 'none' }}
        />
        {gBackgroundImage && (
          <div className="mt-2">
            <RoundBorderButton
              text="Remove wallpaper"
              highlightBorder={false}
              onClick={() => {
                dispatch(setBackgroundImage(undefined));
                dispatch(setPrimaryColor(THEMES[gTheme].colorPalette.primaryColors[0]));
              }}
            />
          </div>
        )}
      </div>
      {!gBackgroundImage && (
        <div className="mb-[15px]">
          <h3 className="font-semibold">Colors</h3>
          <div>
            <SelectColorPanel />
          </div>
        </div>
      )}
      <div className="mb-[15px]">
        <h3 className="font-semibold">Layouts</h3>
        <div className="flex flex-wrap">
          {Object.values(LAYOUT_TYPES).map((layout) => {
            return (
              <LayoutSelectButton
                key={layout}
                layout={layout}
                isActive={layout === gPageInfo?.layout}
              />
            );
          })}
        </div>
      </div>
      {gBackgroundImage && <div className="h-[60px]"></div>}
      <div className="absolute top-full left-0 w-full">
        <button
          type="button"
          className={
            "rounded-[8px] text-white w-full p-2 flex items-center justify-center "
          }
          style={{ backgroundColor: gPrimaryColor }}
          onClick={() => {
            router.push("/");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
