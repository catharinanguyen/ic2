import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePageLayout } from "@/store/slices/pagesSlice";
import { selectCurrentPage } from "@/store/slices/appStatusSlice";

import Image from "next/image";
import Link from "next/link";

import image from "../../public/icons";
import Themes from "./Themes";

import { LAYOUT_TYPES } from "@/constants/constants";

const ControlBar = () => {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);

  const [showThemes, setShowThemes] = useState(false);

  return (
    <div className="relative pb-[84px]">
      <div className="mb-[20px]">
        <h3 className="font-semibold">Themes</h3>
        <div>
          <button
            className="button w-full"
            type="button"
            onClick={() => setShowThemes(true)}
          >
            Sophisticated
          </button>
          <Themes isVisible={showThemes} onClose={() => setShowThemes(false)} />
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
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.FOUR_CELLS,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout01}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.TWO_ROWS,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout02}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.TWO_CELLS_ONE_COL,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout03}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.TWO_COLS,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout04}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.ONE_COL_TWO_CELLS,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout05}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.TWO_CELLS_ONE_ROW,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout06}
              alt="layout"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.ONE_ROW_TWO_CELLS,
                })
              )
            }
          >
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout07}
              alt="layout"
            />
          </button>
        </div>
      </div>
      <Link className="absolute top-full left-0 w-full" href="/">
        <button
          type="button"
          className="rounded-[8px] bg-green w-full p-2 flex items-center justify-center"
        >
          Done
        </button>
      </Link>
    </div>
  );
};

export default ControlBar;
