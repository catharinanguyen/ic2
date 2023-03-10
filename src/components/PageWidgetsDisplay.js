import PageNavigationBottomBar from "@/components/PageNavigationBottomBar";

import OneCol2CellsLayoutDisplay from "@/components/layouts/OneCol2CellsLayoutDisplay";
import { LAYOUT_TYPES } from "@/constants/constants";
import TwoCellsOneRowLayoutDisplay from "@/components/layouts/TwoCellsOneRowLayoutDisplay";
import TwoCellsOneColLayoutDisplay from "@/components/layouts/TwoCellsOneColLayoutDisplay";
import OneRowTwoCellsLayoutDisplay from "@/components/layouts/OneRowTwoCellsLayoutDisplay";
import TwoColsLayoutDisplay from "@/components/layouts/TwoColsLayoutDisplay";
import TwoRowsLayoutDisplay from "@/components/layouts/TwoRowsLayoutDisplay";
import FourCellsLayoutDisplay from "@/components/layouts/FourCellsLayoutDisplay";

function PageWidgetsDisplay(props) {
  const { page } = props;

  const { layout, widgets } = page;

  const renderLayoutWidgetDisplayComp = () => {
    let Comp;
    switch (layout) {
      case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
        Comp = OneCol2CellsLayoutDisplay;
        break;
      case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
        Comp = OneRowTwoCellsLayoutDisplay;
        break;
      case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
        Comp = TwoCellsOneColLayoutDisplay;
        break;
      case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
        Comp = TwoCellsOneRowLayoutDisplay;
        break;
      case LAYOUT_TYPES.TWO_COLS:
        Comp = TwoColsLayoutDisplay;
        break;
      case LAYOUT_TYPES.TWO_ROWS:
        Comp = TwoRowsLayoutDisplay;
        break;
      case LAYOUT_TYPES.FOUR_CELLS:
        Comp = FourCellsLayoutDisplay;
        break;
      default:
        Comp = <div />
    }
    return <Comp widgets={widgets} />;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <div className="row-span-2 col-span-2 h-[820px] gap-3 p-3">
        {renderLayoutWidgetDisplayComp()}
      </div>
      <div
        className="col-span-2 flex justify-center absolute bottom-[18px] m-auto left-0 right-0 box-border"
      >
        <PageNavigationBottomBar />
      </div>
    </div>
  );
}

export default PageWidgetsDisplay;
