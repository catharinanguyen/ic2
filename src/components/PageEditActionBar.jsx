import { useDispatch, useSelector } from "react-redux";

import {
  addPage,
  removePage,
  selectAllPages,
  selectPageInfo,
} from "@/store/slices/pagesSlice";
import { selectCurrentPage, setPage } from "@/store/slices/appStatusSlice";

import Image from "next/image";

import image from "../../public/icons";

import { LAYOUT_TYPES, MAX_PAGES, MIN_PAGES } from "@/constants/constants";

function PageEditActionBar() {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gAllPages = useSelector(selectAllPages);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));

  // const renderLayout = () => {
  //   if (!gCurrentPage) {
  //     return (
  //       <Image src={image.OneColumn2CellsBottomIcon} alt="Layout unselect" />
  //     );
  //   }
  //   const { layout } = gPageInfo;
  //   switch (layout) {
  //     case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
  //       return (
  //         <Image src={image.OneColumn2CellsBottomIcon} alt="Layout unselect" />
  //       );
  //     case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
  //       return (
  //         <Image src={image.TwoCells1ColumnBottomIcon} alt="Layout unselect" />
  //       );
  //     case LAYOUT_TYPES.TWO_ROWS:
  //       return <Image src={image.TwoRowsBottomIcon} alt="Layout unselect" />;
  //     case LAYOUT_TYPES.TWO_COLS:
  //       return <Image src={image.TwoColumnBottomIcon} alt="Layout unselect" />;
  //     case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
  //       return (
  //         <Image src={image.OneRowTwoCellsBottomIcon} alt="Layout unselect" />
  //       );
  //     case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
  //       return (
  //         <Image src={image.TwoCellsOneRowBottomIcon} alt="Layout unselect" />
  //       );
  //     case LAYOUT_TYPES.FOUR_CELLS:
  //       return <Image src={image.FourCellsBottomIcon} alt="Layout unselect" />;
  //     default:
  //       return (
  //         <Image src={image.OneColumn2CellsBottomIcon} alt="Layout unselect" />
  //       );
  //   }
  // };

  const renderAcitveLayout = () => {
    if (!gCurrentPage) {
      return (
        <Image src={image.OneColumn2CellsBottomIcon} alt="Layout unselect" />
      );
    }

    const { layout } = gPageInfo;
    switch (layout) {
      case LAYOUT_TYPES.ONE_COL_TWO_CELLS:
        return (
          <Image
            src={image.OneColumn2CellsBottomIconOn}
            alt="Layout unselect"
          />
        );
      case LAYOUT_TYPES.TWO_CELLS_ONE_COL:
        return (
          <Image
            src={image.TwoCells1ColumnBottomIconOn}
            alt="Layout unselect"
          />
        );
      case LAYOUT_TYPES.TWO_ROWS:
        return <Image src={image.TwoRowsBottomIconOn} alt="Layout unselect" />;
      case LAYOUT_TYPES.TWO_COLS:
        return (
          <Image src={image.TwoColumnBottomIconOn} alt="Layout unselect" />
        );
      case LAYOUT_TYPES.ONE_ROW_TWO_CELLS:
        return (
          <Image src={image.OneRowTwoCellsBottomIconOn} alt="Layout unselect" />
        );
      case LAYOUT_TYPES.TWO_CELLS_ONE_ROW:
        return (
          <Image src={image.TwoCellsOneRowBottomIconOn} alt="Layout unselect" />
        );
      case LAYOUT_TYPES.FOUR_CELLS:
        return (
          <Image src={image.FourCellsBottomIconOn} alt="Layout unselect" />
        );
      default:
        return <Image src={image.Layout09} alt="Layout unselect" />;
    }
  };

  const renderPageButtonList = () => {
    return gAllPages.map((page, index) => (
      <button
        key={index}
        className="w-[50px] mx-2"
        type="button"
        onClick={() => dispatch(setPage(index + 1))}
      >
        {!(gCurrentPage === index--) ? (
          <Image src={image.OneColumn2CellsBottomIcon} alt="Layout unselect" />
        ) : (
          renderAcitveLayout()
        )}
      </button>
    ));
  };

  return (
    <div className="flex justify-between items-center h-fit mt-3">
      {gAllPages.length > MIN_PAGES ? (
        <button
          className="w-[64px]"
          type="button"
          onClick={() => {
            dispatch(
              removePage({
                pageNo: gCurrentPage,
              })
            );
            if (gCurrentPage === gAllPages.length) {
              dispatch(setPage(gCurrentPage - 1));
            }
          }}
        >
          <Image src={image.Delete} alt="Delete" />
        </button>
      ) : (
        <div className="w-[100px]]"></div>
      )}
      <div>{renderPageButtonList()}</div>
      {gAllPages.length < MAX_PAGES ? (
        <button
          className="w-[64px]"
          type="button"
          onClick={() => {
            dispatch(addPage());
            dispatch(setPage(gCurrentPage + 1));
          }}
        >
          <Image src={image.Add} alt="Add" />
        </button>
      ) : (
        <div className="w-[100px]]"></div>
      )}
    </div>
  );
}

export default PageEditActionBar;
