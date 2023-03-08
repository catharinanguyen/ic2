import { useSelector } from "react-redux";

import { selectCurrentPage } from "@/store/slices/appStatusSlice";

import ControlBar from "../components/ControlBar";
import PageEditActionBar from "@/components/PageEditActionBar";
import {
  OneCol2CellsLayout,
  TwoCellsOneColLayout,
  TwoRowsLayout,
  OneRowTwoCellsLayout,
  TwoColsLayout,
  TwoCellsOneRowLayout,
  FourCellsLayout,
} from "@/components/layouts";
import { selectPageInfo } from "@/store/slices/pagesSlice";
import { LAYOUT_TYPES } from "@/constants/constants";

const Management = () => {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  const renderLayout = () => {
    if (!gPageInfo) {
      return <div />;
    }
    const { layout } = gPageInfo;
    switch (layout) {
      case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
        return <OneCol2CellsLayout />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
        return <TwoCellsOneColLayout />;
      case LAYOUT_TYPES.TWO_ROWS:
        return <TwoRowsLayout />;
      case LAYOUT_TYPES.TWO_COLS:
        return <TwoColsLayout />;
      case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
        return <OneRowTwoCellsLayout />;
      case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
        return <TwoCellsOneRowLayout />;
      case LAYOUT_TYPES.FOUR_CELLS:
        return <FourCellsLayout />;
      default:
        return <div />;
    }
  };

  return (
    <div className="h-full w-full max-w-[1180px] max-h-[820px] m-auto relative">
      <div className="bg-black flex flex-1">
        <div className="min-w-[320px] max-w-[320px] max-h-[820px] card items-start">
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
  );
};

export default Management;
