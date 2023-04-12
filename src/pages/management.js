import { useSelector } from "react-redux";

import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import { selectPageInfo } from "@/store/slices/pagesSlice";

import withLoginLogout from "@/components/hoc/withLoginLogout";

import ControlBar from "../components/ControlBar";
import PageEditActionBar from "@/components/PageEditActionBar";
import LayoutEdit from "@/components/layouts/LayoutEdit";

import { THEME_KEYS } from "@/constants/constants";
import withAppLayout from "@/components/hoc/withAppLayout";
import hexToRgba from "hex-to-rgba";

const Management = () => {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  const backgroundStyle =
    gBackgroundImage === undefined || gBackgroundImage === null
      ? gTheme == THEME_KEYS.SOPHISTICATED
        ? { background: `linear-gradient( rgba(26, 36, 51, 0.8), rgba(32, 71, 94, 0.8))` }
        : { backgroundColor: "#ffffff" }
      : { backgroundColor: hexToRgba(gPrimaryColor, 0.2) };

  const backgroundOverlay =
    gBackgroundImage === undefined || gBackgroundImage === null
      ? { backgroundColor: "transparent" }
      : { backgroundColor: "rgba(0,0,0,0.8)" };

  const renderLayout = () => {
    if (!gPageInfo) {
      return <div />;
    }

    const { layout } = gPageInfo;
    return <LayoutEdit layoutType={layout} />;
  };

  return (
    <div className="flex flex-1" style={backgroundOverlay}>
      <div
        className={
          "min-w-[320px] max-w-[320px] max-h-[820px] h-[820px] items-start px-[30px] py-[20px] portrait:min-w-[27.119vw] portrait:max-w-[27.119vw] portrait:max-h-[69.492vw] portrait:h-[69.492vw] portrait:items-start portrait:px-[2.542vw] portrait:py-[1.695vw] " +
          (gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity")
        }
        style={backgroundStyle}
      >
        <ControlBar />
      </div>
      <div className="w-full max-h-[820px] h-[820px] portrait:max-h-[69.492vw] portrait:h-[69.492vw] items-center justify-center">
        <div className="h-[820px] portrait:h-[69.492vw]">
          <div className="grid grid-cols-2 grid-rows-2 mx-auto py-2 px-1 box-border h-full">
            <div className="row-span-2 col-span-2">{renderLayout()}</div>
            <div className="col-span-2 h-[73px]">
              <PageEditActionBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLoginLogout(withAppLayout(Management));
