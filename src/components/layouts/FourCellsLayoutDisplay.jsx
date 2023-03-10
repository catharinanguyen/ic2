import Image from "next/image";

import images from "../../../public/images";

function FourCellsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-2">
        <Image src={images.CalendarWidget} alt="Agenda" />
      </div>
      <div className="row-span-2">
        <Image src={images.MusicWidget} alt="Audio" />
      </div>
      <div className="row-span-2">
        <Image src={images.MessagesWidget} alt="Map" />
      </div>
      <div className="row-span-2">
        <Image src={images.ListWidget} alt="Map" />
      </div>
    </div>
  );
}

export default FourCellsLayoutDisplay;
