import { useSelector } from "react-redux";

import {
  selectCurrentColor,
  selectCurrentPage,
  selectCurrentTheme,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import ControlBar from "../components/ControlBar";
import PageEditActionBar from "@/components/PageEditActionBar";
import LayoutEdit from "@/components/layouts/LayoutEdit";

// import {
//   OneCol2CellsLayoutEdit,
//   TwoCellsOneColLayoutEdit,
//   TwoRowsLayoutEdit,
//   OneRowTwoCellsLayoutEdit,
//   TwoColsLayoutEdit,
//   TwoCellsOneRowLayoutEdit,
//   FourCellsLayoutEdit,
// } from "@/components/layouts";

import { LAYOUT_TYPES, THEME_KEYS } from "@/constants/constants";

const Management = () => {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);

  const renderLayout = () => {
    if (!gPageInfo) {
      return <div />;
    }

    const { layout } = gPageInfo;
    // return <LayoutEdit layoutType={layout} />;
    switch (layout) {
      case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
        // return <OneCol2CellsLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
        // return <TwoCellsOneColLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.TWO_ROWS:
        // return <TwoRowsLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.TWO_COLS:
        // return <TwoColsLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
        // return <OneRowTwoCellsLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
        // return <TwoCellsOneRowLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
      case LAYOUT_TYPES.FOUR_CELLS:
        // return <FourCellsLayoutEdit />;
        return <LayoutEdit layoutType={layout} />;
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
      <div>
        <div className="flex flex-1">
          <div
            className={
              "min-w-[320px] max-w-[320px] max-h-[820px] items-start p-[30px] " +
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
