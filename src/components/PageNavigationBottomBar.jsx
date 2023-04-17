import { useDispatch, useSelector } from "react-redux";

import { selectTotalPages } from "@/store/slices/pagesSlice";
import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
  setPage,
} from "@/store/slices/appStatusSlice";

import DotButton from "@/components/DotButton";
import { THEME_KEYS } from "@/constants/constants";

function PageNavigationBottomBar() {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gTotalPages = useSelector(selectTotalPages);
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  return (
    <div
      className={
        "box-border p-1 px-3 rounded-full flex items-center " +
        (gTheme == THEME_KEYS.SOPHISTICATED
          ? gBackgroundImage !== undefined || gBackgroundImage !== null
            ? "bg-[#343332] shadow-lg"
            : "bg-gradient-to-b from-[#1a2433] to-[#20475e]"
          : "bg-white shadow")
      }
    >
      <button
        id="home-icon-button"
        className="p-1 rounded-full"
        onClick={() => dispatch(setPage(0))}
      >
        <svg
          width="18"
          height="16"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9406 5.90443L7.30918 0.277088C7.26863 0.236461 7.22047 0.204229 7.16745 0.182237C7.11443 0.160246 7.05759 0.148926 7.0002 0.148926C6.9428 0.148926 6.88596 0.160246 6.83294 0.182237C6.77992 0.204229 6.73176 0.236461 6.69121 0.277088L1.05977 5.90443C0.895703 6.06849 0.802734 6.29135 0.802734 6.52377C0.802734 7.00639 1.19512 7.39877 1.67773 7.39877H2.27109V11.4142C2.27109 11.6562 2.4666 11.8517 2.70859 11.8517H6.1252V8.7892H7.65645V11.8517H11.2918C11.5338 11.8517 11.7293 11.6562 11.7293 11.4142V7.39877H12.3227C12.5551 7.39877 12.7779 7.30717 12.942 7.14174C13.2824 6.79994 13.2824 6.24623 12.9406 5.90443Z"
            fill={gCurrentPage === 0 ? gPrimaryColor : "#CABFB9"}
          />
        </svg>
      </button>
      {Array.from({ length: gTotalPages }, (v, index) => (
        <DotButton key={index} pageNo={index + 1} isActive={index === gCurrentPage - 1} />
      ))}
    </div>
  );
}

export default PageNavigationBottomBar;
