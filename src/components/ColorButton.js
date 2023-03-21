import { setPrimaryColor } from "@/store/slices/appStatusSlice";
import clsx from "clsx";
import { useDispatch } from "react-redux";

function ColorButton(props) {
  const { color } = props;

  const dispatch = useDispatch();

  return (
    <button
      className={
        "colors-green radius-[8px] w-[64px] h-[64px] rounded-[8px] mr-[20px]"
      }
      style={{ backgroundColor: color }}
      onClick={() => {
        dispatch(setPrimaryColor(color));
      }}
    />
  );
}

export default ColorButton;
