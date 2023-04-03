import { TEXT_TYPES } from "@/constants/constants";
import { capitalize } from "lodash";
import React from "react";
import TextButton from "./TextButton";

function SelectTextTypes() {
  const textTypes = Object.values(TEXT_TYPES);
  return (
    <div className="flex mx-[-5px]">
      {textTypes.map((text) => {
        return <TextButton key={text} text={capitalize(text)} />;
      })}
    </div>
  );
}

export default SelectTextTypes;
