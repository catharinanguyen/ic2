import { useDispatch } from "react-redux";

import { setPage } from "@/store/slices/appStatusSlice";

import Image from "next/image";

import image from "../../public/icons";

function PageEditActionBar() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center h-fit">
      <button className="w-[64px]" type="button">
        <Image src={image.Delete} alt="Delete" />
      </button>
      <div>
        <button className="w-[64px]" type="button">
          <Image src={image.Layout08} alt="Layout two" />
        </button>
        <button
          className="w-[64px]"
          type="button"
          onClick={() => dispatch(setPage(2))}
        >
          <Image src={image.Layout09} alt="Layout three" />
        </button>
        <button className="w-[64px]" type="button">
          <Image src={image.Layout10} alt="Layout four" />
        </button>
      </div>
      <button className="w-[64px]" type="button">
        <Image src={image.Add} alt="Add" />
      </button>
    </div>
  );
}

export default PageEditActionBar;
