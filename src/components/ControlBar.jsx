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
  selectTextType,
  setTextType,
  setBackgroundImage,
  setPrimaryColor,
} from "@/store/slices/appStatusSlice";

import ThemeSelectionPopup from "./popups/ThemeSelectionPopup";

import LayoutSelectButton from "@/components/layouts/LayoutSelectButton";
import RoundBorderButton from "@/components/RoundBorderButton";
import SelectColorPanel from "@/components/SelectColorPanel";
import SelectTextTypes from "./SelectTextTypes";
import ControlComponent from "./ControlComponent";

import {
  LAYOUT_TYPES,
  THEMES,
  THEME_KEYS,
  TEXT_TYPES,
} from "@/constants/constants";

const ControlBar = () => {
  const hiddenFileInput = React.useRef(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTextType = useSelector(selectTextType);
  const styleActiveButtonText =
    gTextType == capitalize(TEXT_TYPES.COMPACT) ? "text-[24px]" : "text-[28px]";
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
      dispatch(setPrimaryColor(palette["Vibrant"].hex));
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
    <div className="relative h-full pb-[0px]">
      <ControlComponent title="Themes">
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
      </ControlComponent>
      <ControlComponent title="Text sizes">
        <SelectTextTypes />
      </ControlComponent>
      <ControlComponent title="Wallpaper">
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
          style={{ display: "none" }}
        />
        {gBackgroundImage && (
          <div className="mt-2">
            <RoundBorderButton
              text="Remove wallpaper"
              highlightBorder={false}
              onClick={() => {
                dispatch(setBackgroundImage(undefined));
                dispatch(
                  setPrimaryColor(THEMES[gTheme].colorPalette.primaryColors[0])
                );
              }}
            />
          </div>
        )}
      </ControlComponent>
      {!gBackgroundImage && (
        <ControlComponent title="Colors">
          <div>
            <SelectColorPanel />
          </div>
        </ControlComponent>
      )}
      <ControlComponent title="Layouts">
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
      </ControlComponent>
      <div className="absolute bottom-0 left-0 w-full">
        <button
          type="button"
          className={
            "rounded-[8px] text-white w-full p-2 flex items-center justify-center " +
            styleActiveButtonText
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
