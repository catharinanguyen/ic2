import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPageInfo, updatePageLayout } from "@/store/slices/pagesSlice";
import { selectCurrentPage } from "@/store/slices/appStatusSlice";

import Image from "next/image";

import image from "../../public/icons";
import Themes from "./Themes";

import { LAYOUT_TYPES } from "@/constants/constants";
import { useRouter } from "next/router";

const ControlBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

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
            onClick={() => {
              dispatch(
                updatePageLayout({
                  pageNo: gCurrentPage,
                  layout: LAYOUT_TYPES.FOUR_CELLS,
                })
              );
            }}
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout01} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image className="" src={image.Layout02} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout03} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout04} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout05} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout06} alt="layout" />
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
            className="w-[60px] mr-[15px] mb-[15px]"
          >
            <Image src={image.Layout07} alt="layout" />
          </button>
        </div>
      </div>
      <div className="absolute top-full left-0 w-full">
        <button
          type="button"
          className="rounded-[8px] bg-green w-full p-2 flex items-center justify-center"
          onClick={() => {
            router.push('/');
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ControlBar;
