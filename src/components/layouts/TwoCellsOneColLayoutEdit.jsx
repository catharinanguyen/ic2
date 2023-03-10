import Image from "next/image";

import image from "../../../public/icons";

function TwoCellsOneColLayoutEdit() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-2 card">
        <Image src={image.Agenda} alt="Agenda" />
      </div>
      <div className="row-span-4 card">
        <Image src={image.Map} alt="Map" />
      </div>
      <div className="row-span-2 card">
        <Image src={image.Audio} alt="Audio" />
      </div>
    </div>
  );
}

export default TwoCellsOneColLayoutEdit;
