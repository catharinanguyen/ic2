import { selectCurrentTheme } from "@/store/slices/appStatusSlice";
import React from "react";
import { useSelector } from "react-redux";
import MapButtons from "./MapButtons";

const CompassMapButton = () => {
  const gTheme = useSelector(selectCurrentTheme);
  const imageSrc = `/images/compass-map-${gTheme.toLowerCase()}.svg`;

  return (
    <div>
      <MapButtons buttonImg={imageSrc} />
    </div>
  );
};

export default CompassMapButton;
