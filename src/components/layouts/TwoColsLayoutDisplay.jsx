import Image from "next/image";

import images from "../../../public/images";

function TwoColsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="row-span-4">
        <Image src={images.MapWidgetVertical} alt="Map" />
      </div>
      <div className="row-span-4">
        <Image src={images.MapWidgetVertical} alt="Audio" />
      </div>
    </div>
  );
}

export default TwoColsLayoutDisplay;
