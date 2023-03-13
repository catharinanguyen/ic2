import { THEME_KEYS } from "@/constants/constants";
import { selectCurrentTheme } from "@/store/slices/appStatusSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

import images from "../../../public/images";

function FourCellsLayoutDisplay() {
  const gTheme = useSelector(selectCurrentTheme);

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-2">
        <Image
          src={
            gTheme == THEME_KEYS.SOPHISTICATED
              ? images.CalendarWidget
              : images.CalendarWidgetLight
          }
          alt="Agenda"
        />
      </div>
      <div className="row-span-2">
        <Image
          src={
            gTheme == THEME_KEYS.SOPHISTICATED
              ? images.MusicWidget
              : images.MusicWidgetLight
          }
          alt="Audio"
        />
      </div>
      <div className="row-span-2">
        <Image
          src={
            gTheme == THEME_KEYS.SOPHISTICATED
              ? images.MessagesWidget
              : images.MessagesWidgetLight
          }
          alt="Map"
        />
      </div>
      <div className="row-span-2">
        <Image
          src={
            gTheme == THEME_KEYS.SOPHISTICATED
              ? images.ListWidget
              : images.ListWidgetLight
          }
          alt="Map"
        />
      </div>
    </div>
  );
}

export default FourCellsLayoutDisplay;
