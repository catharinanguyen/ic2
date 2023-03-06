import Image from "next/image";

import ControlBar from "../components/ControlBar";
import image from "../../public/icons";

const Management = () => {
  return (
    <div className="grid grid-rows-5 auto-rows-fr grid-cols-[320px_minmax(0,_1fr)_minmax(0,_1fr)] gap-4 h-full">
      <div className="row-start-1 row-span-5 card">
        <ControlBar />
      </div>
      <div className="row-start-1 row-span-4 card">
        <Image src={image.Map} alt="Map" />
      </div>
      <div className="row-start-1 row-end-3 card">
        <Image src={image.Agenda} alt="Agenda" />
      </div>
      <div className="row-start-3 row-end-5 card">
        <Image src={image.imageAudio} alt="Audio" />
      </div>
    </div>
  );
};

export default Management;
