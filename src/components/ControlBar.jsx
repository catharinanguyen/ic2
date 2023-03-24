import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectPageInfo } from "@/store/slices/pagesSlice";
import {
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
  selectTextType,
  setTextType,
} from "@/store/slices/appStatusSlice";

import ThemeSelectionPopup from "./popups/ThemeSelectionPopup";

import { LAYOUT_TYPES, TEXT_TYPES } from "@/constants/constants";
import { useRouter } from "next/router";
import LayoutSelectButton from "@/components/layouts/LayoutSelectButton";
import RoundBorderButton from "@/components/RoundBorderButton";
import { capitalize } from "lodash";
import SelectColorPanel from "@/components/SelectColorPanel";
import SelectTextTypes from "./SelectTextTypes";
import ControlComponent from "./ControlComponent";

const ControlBar = () => {
  const router = useRouter();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTextType = useSelector(selectTextType);
  const styleActiveText =
    gTextType == capitalize(TEXT_TYPES.COMPACT) ? "text-[24px]" : "text-[28px]";

  const [showThemesSelectionPopup, setShowThemesSelectionPopup] =
    useState(false);

  return (
    <div className="relative h-full">
      <ControlComponent title="Themes">
        <RoundBorderButton
          text={capitalize(gTheme)}
          onClick={() => setShowThemesSelectionPopup(true)}
        />
        <ThemeSelectionPopup
          isVisible={showThemesSelectionPopup}
          onClose={() => setShowThemesSelectionPopup(false)}
        />
      </ControlComponent>

      <ControlComponent title="Text sizes">
        <SelectTextTypes />
      </ControlComponent>

      <ControlComponent title="Colors">
        <SelectColorPanel />
      </ControlComponent>

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
            styleActiveText
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
