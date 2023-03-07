import Image from "next/image";

import ControlBar from "../components/ControlBar";
import image from "../../public/icons";

const Management = () => {
  return (
    <div className="h-full w-full max-w-[1180px] max-h-[820px] m-auto relative">
      <div className="bg-black flex flex-1">
        <div className="min-w-[320px] max-w-[320px] max-h-[820px] card items-start">
          <ControlBar />
        </div>
        <div className="w-full max-h-[820px] items-center justify-center">
          <div className="h-[800px]">
            <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
              <div className="row-span-4 card">
                <Image src={image.Map} alt="Map" />
              </div>
              <div className="row-span-2 card">
                <Image src={image.Agenda} alt="Agenda" />
              </div>
              <div className="row-span-2 card">
                <Image src={image.Audio} alt="Audio" />
              </div>
              <div className="col-span-2 flex justify-between items-center">
                <button className="w-[64px]" type="button">
                  <Image src={image.Delete} />
                </button>
                <div>
                  <button className="w-[64px]" type="button">
                    <Image src={image.Layout08} />
                  </button>
                  <button className="w-[64px]" type="button">
                    <Image src={image.Layout09} />
                  </button>
                  <button className="w-[64px]" type="button">
                    <Image src={image.Layout10} />
                  </button>
                </div>
                <button className="w-[64px]" type="button">
                  <Image src={image.Add} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
