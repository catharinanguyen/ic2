import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import {
  addPage,
  removePage,
  selectAllPages,
  selectTotalPages,
} from "@/store/slices/pagesSlice";
import { selectCurrentPage, setPage } from "@/store/slices/appStatusSlice";

import image from "../../public/icons";

import LayoutIconButton from "@/components/LayoutIconButton";

import { MAX_PAGES, MIN_PAGES } from "@/constants/constants";

function PageEditActionBar() {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gAllPages = useSelector(selectAllPages);
  const gTotalPages = useSelector(selectTotalPages);

  const renderPageButtonList = () => {
    return gAllPages.map((page, index) => (
      <LayoutIconButton
        key={index}
        layout={page.layout}
        isActive={gCurrentPage === index + 1}
        onClick={() => dispatch(setPage(index + 1))}
      />
    ));
  }

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
              }));
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
      <div>
        {renderPageButtonList()}
      </div>
      {gAllPages.length < MAX_PAGES
        ? (
          <button
            className="w-[64px]"
            type="button"
            onClick={() => {
              dispatch(addPage());
              dispatch(setPage(gTotalPages + 1));
            }}
          >
            <Image src={image.Add} alt="Add" />
          </button>
        )
        : (
          <div className="w-[100px]]"></div>
        )}
    </div>
  );
}

export default PageEditActionBar;
