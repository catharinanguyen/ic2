import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectPageInfo } from "@/store/slices/pagesSlice";
import {
  selectCurrentPage,
  selectCurrentTheme,
} from "@/store/slices/appStatusSlice";

import ThemeSelectionPopup from "./popups/ThemeSelectionPopup";

import { LAYOUT_TYPES } from "@/constants/constants";
import { useRouter } from "next/router";
import LayoutSelectButton from "@/components/layouts/LayoutSelectButton";

const ControlBar = () => {
  const router = useRouter();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  const gTheme = useSelector(selectCurrentTheme);

  const [showThemesSelectionPopup, setShowThemesSelectionPopup] =
    useState(false);

  return (
    <div className="relative pb-[84px]">
      <div className="mb-[20px]">
        <h3 className="font-semibold">Themes</h3>
        <div>
          <button
            className="button w-full"
            type="button"
            onClick={() => setShowThemesSelectionPopup(true)}
          >
            {gTheme.charAt(0).toUpperCase() + gTheme.slice(1).toLowerCase()}
          </button>
          <ThemeSelectionPopup
            isVisible={showThemesSelectionPopup}
            onClose={() => setShowThemesSelectionPopup(false)}
          />
        </div>
      </div>
      <div className="mb-[20px]">
        <h3 className="font-semibold">Text size</h3>
        <div className="flex">
          <button className="button text-[16px] px-6 mr-[10px]" type="button">
            Compact
          </button>
          <button className="button text-[16px] px-6" type="button">
            Comfortable
          </button>
        </div>
      </div>
      <div className="mb-[20px]">
        <h3 className="font-semibold">Colors</h3>
        <div>
          <button
            className="colors-green radius-[8px] w-[64px] h-[64px] bg-green rounded-[8px] mr-[20px]"
            onClick={() => {}}
          ></button>
          <button
            type="button"
            className="colors-green radius-[8px] w-[64px] h-[64px] bg-blue rounded-[8px]"
            onClick={() => {}}
          ></button>
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
          className="rounded-[8px] bg-green w-full p-2 flex items-center justify-center"
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
