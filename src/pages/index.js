import { useReducer } from "react";
import { useSelector } from "react-redux";

import Head from "next/head";
import Image from "next/image";

import { selectPageInfo } from "@/store/slices/pagesSlice";
import {
  selectCurrentPage,
  selectFullWidget,
  selectCurrentTheme,
  selectPrimaryColor,
  selectBackgroundImage,
} from "@/store/slices/appStatusSlice";
import { selectUser } from "@/store/slices/userSlice";

import BottomBarButton from "@/components/BottomBarButton";
import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button7 from "@/components/Button7";
import Button8 from "@/components/Button8";
import FullWidgetDisplay from "@/components/FullWidgetDisplay";
import LoginPopup from "@/components/popups/LoginPopup";
import PageWidgetsDisplay from "@/components/PageWidgetsDisplay";
import SettingsButton from "@/components/SettingsButton";

import { THEME_KEYS } from "@/constants/constants";
import withAppLayout from "@/components/hoc/withAppLayout";

function Home() {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gFullWidget = useSelector(selectFullWidget);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);
  const gUser = useSelector(selectUser);

  const [localState, updateLocalState] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      openBottomBar: false,
    }
  );

  const renderContent = () => {
    if (gFullWidget) {
      return <FullWidgetDisplay />;
    }
    return <PageWidgetsDisplay page={gPageInfo} />;
  };

  let leftImageTheme;
  switch (gPrimaryColor) {
    case "#04D5B7":
      leftImageTheme = "dark";
      break;
    case "#0056FE":
      leftImageTheme = "sophisticated-blue";
      break;
    case "#0072DE":
      leftImageTheme = "light";
      break;
    case "#FF3366":
      leftImageTheme = "modern-pink";
      break;
    default:
      leftImageTheme = gTheme === THEME_KEYS.SOPHISTICATED ? "dark" : "light";
      break;
  }

  const imageSrc = `/images/left-panel-${leftImageTheme}.jpg`;

  return (
    <>
      <div className="flex flex-1">
        <div className="w-fit h-fit max-h-[820px]">
          <Image
            src={imageSrc}
            alt="left-pane"
            width={320}
            height={770}
            className=" object-contain w-[320px] max-w-[320px] min-w-[320px] h-fit max-h-[770px]"
          />
        </div>
        <div className="mx-auto box-border flex-auto items-center justify-center grid grid-cols-2 grid-rows-2 px-1 w-full h-[820px] max-h-[820px] relative">
          <div className="col-span-2 row-span-2 h-fit">{renderContent()}</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[38px]">
        <BottomBarButton onClick={() => updateLocalState({ openBottomBar: true })} />
      </div>
      {localState.openBottomBar === true && (
        <div
          className={
            "w-full h-[104px] absolute bottom-0 left-0 right-0 bg-black flex items-center justify-center z-20 space-x-20 transfrom " +
            (gTheme == THEME_KEYS.SOPHISTICATED
              ? 'rounded-t-[2rem] bg-[url("/images/bottom-bar-bg.svg")]'
              : 'bg-[url("/images/bottom-bar-bg-light.svg")]')
          }
        >
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button4 />
          <Button7 />
          <Button8 />
          {/* <SettingsButton /> */}
          <button
            className={
              "absolute -top-5 l-[50%] -translate-x-2/4 w-[60px] h-[38px] flex justify-center items-center " +
              (gTheme === THEME_KEYS.SOPHISTICATED
                ? "bg-[#15202c] rounded-t-[10px]"
                : "bg-black rounded-t-[4px]")
            }
            onClick={() => updateLocalState({ openBottomBar: false })}
          >
            <Image src={`/images/button-collapse.svg`} width={22} height={13} />
          </button>
        </div>
      )}
      <LoginPopup isVisible={!gUser.email} />
    </>
  );
}

export default withAppLayout(Home);
