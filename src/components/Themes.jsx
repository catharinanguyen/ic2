import Image from "next/image";
import React from "react";
import Sophisticated from "../../public/images/sophi.png";
import Modern from "../../public/images/modern.png";
import Retro from "../../public/images/retro.png";

const Themes = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-10"
      id="wrapper"
      onClick={() => onClose(handleClose)}
    >
      <div className="bg-gradient-to-r from-bg-card to-bg-card1 relative w-[980px] h-[702px] p-[50px] border border-border_green">
        <button
          className="absolute top-[10px] left-[10px]"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="overflow-hidden">
          <div className="overflow-scroll overflow-y-hidden">
            <div className="flex w-[2500px]">
              <div
                className="max-w-[770px] mr-[64px]"
                value="Sophisticated"
                onClick={() => {}}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Sophisticated
                </h2>
                <div className="border-4 border-border_green">
                  <Image src={Sophisticated} alt="Sophisticated" />
                </div>
              </div>
              <div
                className="max-w-[770px] mr-[64px]"
                value="Sophisticated"
                onClick={() => {}}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Modern
                </h2>
                <div className="border-4 border-border_green">
                  <Image src={Modern} alt="Modern" />
                </div>
              </div>
              <div
                className="max-w-[770px]"
                value="Sophisticated"
                onClick={() => {}}
              >
                <h2 className="text-[24px] font-semibold mb-[30px] text-center">
                  Retro
                </h2>
                <div className="border border-border_green">
                  <Image src={Retro} alt="Retro" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
