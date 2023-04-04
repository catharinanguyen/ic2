import { THEME_KEYS } from "@/constants/constants";
import {
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const MapButtons = (props) => {
  const { buttonImg, onClick } = props;
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  // let buttonStyle;

  const buttonStyle =
    gTheme === THEME_KEYS.SOPHISTICATED
      ? { borderColor: gPrimaryColor, backgroundColor: "#000" }
      : { borderColor: "#8C8C8C", backgroundColor: "#fff" };

  return (
    <button
      className="flex items-center justify-center rounded-[50%] w-[88px] h-[88px] border-[2px] border-solid cursor-pointer"
      style={buttonStyle}
      onClick={onClick}
    >
      <Image src={buttonImg} alt="Voice Map" width={50} height={50} />
    </button>
  );
};

export default MapButtons;
