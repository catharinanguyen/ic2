import { useSelector } from "react-redux";

import { selectPrimaryColor } from "@/store/slices/appStatusSlice";

function RoundBorderButton(props) {
  const { text, onClick } = props;

  const gPrimaryColor = useSelector(selectPrimaryColor);

  return (
    <button
      className={"w-full button "}
      style={{ borderColor: gPrimaryColor, color: gPrimaryColor }}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default RoundBorderButton;
