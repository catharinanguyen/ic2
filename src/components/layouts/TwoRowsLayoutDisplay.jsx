import Image from "next/image";

import images from "../../../public/images";

function TwoRowsLayoutDisplay() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-3 p-2 mx-auto box-border h-full">
      <div className="col-span-2 row-span-2">
        <Image src={images.MapWidgetHorizontal} alt="Map" />
      </div>
      <div className="col-span-2 row-span-2">
        <Image src={images.WeatherWidgetHorizontal} alt="Audio" />
      </div>
    </div>
  );
}

export default TwoRowsLayoutDisplay;
