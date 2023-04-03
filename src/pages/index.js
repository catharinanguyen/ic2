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

import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button7 from "@/components/Button7";
import Button8 from "@/components/Button8";
import SettingsButton from "@/components/SettingsButton";
import PageWidgetsDisplay from "@/components/PageWidgetsDisplay";
import { THEME_KEYS } from "@/constants/constants";

import BottomBarButton from "@/components/BottomBarButton";
import FullWidgetDisplay from "@/components/FullWidgetDisplay";

export default function Home() {
  const gCurrentPage = useSelector(selectCurrentPage);
  const gPageInfo = useSelector(selectPageInfo(gCurrentPage));
  const gTheme = useSelector(selectCurrentTheme);
  const gFullWidget = useSelector(selectFullWidget);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);

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
      <Head>
        <title>Interactive Console 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "h-full w-full max-w-[1180px] max-h-[820px] m-auto relative " +
          (gTheme == THEME_KEYS.SOPHISTICATED ? "bg-black" : "bg-gray")
        }
        style={{
          backgroundImage: `${
            gBackgroundImage ? `url(${gBackgroundImage})` : ""
          }`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-1">
          <div className="w-fit h-fit max-h-[820px]">
            <Image
              src={imageSrc}
              alt="left-pane"
              width={320}
              height={820}
              className=" object-contain w-[320px] max-w-[320px] min-w-[320px] h-fit max-h-[820px]"
            />
          </div>
          <div className="mx-auto box-border flex-auto items-center justify-center grid grid-cols-2 grid-rows-2 p-2 pb-0 w-full h-[820px] max-h-[820px] relative">
            <div className="col-span-2 row-span-2 h-fit">{renderContent()}</div>
            <div className="flex col-span-2 items-center h-4">
              <BottomBarButton
                onClick={() => updateLocalState({ openBottomBar: true })}
              />
            </div>
          </div>
        </div>
        {localState.openBottomBar === true && (
          <div
            className={
              "w-full h-[104px] absolute bottom-0 left-0 right-0 bg-black flex items-center justify-center z-20 space-x-20 " +
              (gTheme == THEME_KEYS.SOPHISTICATED
                ? 'rounded-t-[2rem] bg-[url("/images/bottom-bar-bg.svg")]'
                : 'bg-[url("/images/bottom-bar-bg-light.svg")]')
            }
            onClick={() => updateLocalState({ openBottomBar: false })}
          >
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button4 />
            <Button7 />
            <Button8 />
            <SettingsButton />
          </div>
        )}
      </div>
    </>
  );
}
