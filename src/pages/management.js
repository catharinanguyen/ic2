import { useSelector } from "react-redux";

import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import ControlBar from "../components/ControlBar";
import PageEditActionBar from "@/components/PageEditActionBar";
import LayoutEdit from "@/components/layouts/LayoutEdit";

import { THEME_KEYS } from "@/constants/constants";

const Management = () => {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  const renderLayout = () => {
    if (!gPageInfo) {
      return <div />;
    }

    const { layout } = gPageInfo;
    return <LayoutEdit layoutType={layout} />;
  };

  return (
    <div
      className={
        "h-full w-full max-w-[1180px] max-h-[820px] m-auto relative " +
        (gTheme == THEME_KEYS.SOPHISTICATED ? "bg-black " : "bg-gray ")
      }
      style={{
        backgroundImage: `${gBackgroundImage ? `url(${gBackgroundImage})` : ''}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
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
