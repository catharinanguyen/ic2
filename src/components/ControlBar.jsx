import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectPageInfo } from "@/store/slices/pagesSlice";
import {
  selectCurrentColor,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";

import ThemeSelectionPopup from "./popups/ThemeSelectionPopup";

import { COLOR_KEYS, LAYOUT_TYPES, THEME_KEYS } from "@/constants/constants";
import { useRouter } from "next/router";
import LayoutSelectButton from "@/components/layouts/LayoutSelectButton";
import ColorSelectButton from "./ColorSelectButton";
import RoundBorderButton from "@/components/RoundBorderButton";
import { capitalize } from "lodash";
import SelectColorPanel from "@/components/SelectColorPanel";

const ControlBar = () => {
  const router = useRouter();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);

  const [showThemesSelectionPopup, setShowThemesSelectionPopup] =
    useState(false);

  return (
    <div className="relative pb-[84px]">
      <div className="mb-[20px]">
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
      <div className="mb-[20px]">
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
      <div className="mb-[20px]">
        <h3 className="font-semibold">Colors</h3>
        <div>
          <SelectColorPanel />
        </div>
      </div>
      <div className="mb-[20px]">
        <h3 className="font-semibold">Layouts</h3>
        <div className="flex flex-wrap">
          {Object.values(LAYOUT_TYPES).map((layout) => {
            return (
              <LayoutSelectButton
                key={layout}
                layout={layout}
                isActive={layout === gPageInfo.layout}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute top-full left-0 w-full">
        <button
          type="button"
          className={
            "rounded-[8px] text-white w-full p-2 flex items-center justify-center bg-th-background-button"
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
