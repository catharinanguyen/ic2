import { THEME_KEYS } from "@/constants/constants";
import { selectCurrentTheme } from "@/store/slices/appStatusSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

import image from "../../../public/icons";

function TwoRowsLayoutEdit() {
  const gTheme = useSelector(selectCurrentTheme);

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div
        className={
          "col-span-2 row-span-2 " +
          (gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity")
        }
      >
        <Image src={image.Map} alt="Map" />
      </div>
      <div
        className={
          "col-span-2 row-span-2 " +
          (gTheme == THEME_KEYS.SOPHISTICATED ? "card" : "card-simplicity")
        }
      >
        <Image src={image.Audio} alt="Audio" />
      </div>
    </div>
  );
}

export default TwoRowsLayoutEdit;
