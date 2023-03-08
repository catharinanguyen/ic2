import { useDispatch, useSelector } from "react-redux";

import { addPage, removePage, selectAllPages } from "@/store/slices/pagesSlice";
import { selectCurrentPage, setPage } from "@/store/slices/appStatusSlice";

import Image from "next/image";

import image from "../../public/icons";

import { MAX_PAGES, MIN_PAGES } from "@/constants/constants";

function PageEditActionBar() {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gAllPages = useSelector(selectAllPages)

  const renderPageButtonList = () => {
    return gAllPages.map((page, index) => (
      <button
        key={index}
        className="w-[64px]"
        type="button"
        onClick={() => dispatch(setPage(index + 1))}
      >
        <Image src={image.Layout08} alt="Layout two" />
      </button>
    ))
  }

  return (
    <div className="flex justify-between items-center h-fit">
      {gAllPages.length > MIN_PAGES
        ? (
          <button
            className="w-[64px]"
            type="button"
            onClick={() => {
              dispatch(removePage({
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
              dispatch(setPage(gCurrentPage + 1));
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
