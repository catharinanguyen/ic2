import React from "react";
import MapButtons from "./MapButtons";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "@/store/slices/appStatusSlice";

const SearchMapButton = () => {
  const gTheme = useSelector(selectCurrentTheme);
  const imageSrc = `/images/search-map-${gTheme.toLowerCase()}.svg`;

  return (
    <div>
      <MapButtons buttonImg={imageSrc} />
    </div>
  );
};

export default SearchMapButton;
