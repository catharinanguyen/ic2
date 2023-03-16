import { useSelector } from "react-redux";

import {
  selectCurrentColor,
  selectCurrentPage,
  selectCurrentTheme,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import ControlBar from "../components/ControlBar";
import PageEditActionBar from "@/components/PageEditActionBar";
import {
  OneCol2CellsLayoutEdit,
  TwoCellsOneColLayoutEdit,
  TwoRowsLayoutEdit,
  OneRowTwoCellsLayoutEdit,
  TwoColsLayoutEdit,
  TwoCellsOneRowLayoutEdit,
  FourCellsLayoutEdit,
} from "@/components/layouts";

import { LAYOUT_TYPES, THEME_KEYS } from "@/constants/constants";

const Management = () => {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gColor = useSelector(selectCurrentColor);

  const renderLayout = () => {
    if (!gPageInfo) {
      return <div />;
    }
    const { layout } = gPageInfo;
    switch (layout) {
      case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
        return <OneCol2CellsLayoutEdit />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
        return <TwoCellsOneColLayoutEdit />;
      case LAYOUT_TYPES.TWO_ROWS:
        return <TwoRowsLayoutEdit />;
      case LAYOUT_TYPES.TWO_COLS:
        return <TwoColsLayoutEdit />;
      case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
        return <OneRowTwoCellsLayoutEdit />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
        return <TwoCellsOneRowLayoutEdit />;
      case LAYOUT_TYPES.FOUR_CELLS:
        return <FourCellsLayoutEdit />;
      default:
        return <div />;
    }
  };

  return (
    <div
      className={
        "h-full w-full max-w-[1180px] max-h-[820px] m-auto relative " +
        (gTheme == THEME_KEYS.SOPHISTICATED ? "bg-black " : "bg-gray ")
      }
    >
      <div className={gColor.toLowerCase()}>
        <div className="flex flex-1">
          <div
            className={
              "min-w-[320px] max-w-[320px] max-h-[820px] items-start " +
              (gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity")
            }
          >
            <ControlBar />
          </div>
          <div className="w-full max-h-[820px] items-center justify-center">
            <div className="h-[800px]">
              <div className="grid grid-cols-2 grid-rows-2 mx-auto p-2 box-border h-full">
                <div className="row-span-2 col-span-2">{renderLayout()}</div>
                <div className="col-span-2 h-[73px]">
                  <PageEditActionBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
