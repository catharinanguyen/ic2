import { useSelector } from "react-redux";
import { selectCurrentPage } from "@/store/slices/appStatusSlice";

import AllWidgetsPage from "@/components/AllWidgetsPage";
import LayoutDisplay from "@/components/layouts/LayoutDisplay";
import PageNavigationBottomBar from "@/components/PageNavigationBottomBar";

function PageWidgetsDisplay(props) {
  const gCurrentPage = useSelector(selectCurrentPage);

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <div className="row-span-2 col-span-2 h-[820px] gap-3 p-3">
        {
          gCurrentPage === 0
            ? <AllWidgetsPage />
            : <LayoutDisplay />
        }
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
