import { useTheme } from "next-themes";
import Image from "next/image";
import image from "../../public/icons";
import Themes from "./themes";
import { useState } from "react";

const ControlBar = () => {
  const [showThemes, setShowThemes] = useState(false);

  return (
    <div className="relative pb-[84px]">
      <div className="mb-[20px]">
        <h3>Themes</h3>
        <div>
          <button
            className="button w-full"
            type="button"
            onClick={() => setShowThemes(true)}
          >
            Sophisticated
          </button>
          <Themes isVisible={showThemes} onClose={() => setShowThemes(false)} />
        </div>
      </div>
      <div className="mb-[20px]">
        <h3>Text size</h3>
        <div className="flex">
          <button className="button mr-[10px]" type="button">
            Compact
          </button>
          <button className="button" type="button">
            Comfortable
          </button>
        </div>
      </div>
      <div className="mb-[20px]">
        <h3>Colors</h3>
        <div>
          <button
            className="colors-green radius-[8px] w-[64px] h-[64px] bg-green rounded-[8px] mr-[20px]"
            onClick={() => {}}
          ></button>
          <button
            type="button"
            className="colors-green radius-[8px] w-[64px] h-[64px] bg-blue rounded-[8px]"
            onClick={() => {}}
          ></button>
        </div>
      </div>
      <div className="mb-[20px]">
        <h3>Layouts</h3>

        <div className="flex flex-wrap">
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout01}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout02}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout03}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout04}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout05}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout06}
              alt="layout"
            />
          </button>
          <button>
            <Image
              className="w-[70px] mr-[15px] mb-[15px]"
              src={image.Layout07}
              alt="layout"
            />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-full left-0 rounded-[8px] bg-green w-full p-4 flex items-center justify-center"
      >
        Done
      </button>
    </div>
  );
};

export default ControlBar;
