import { selectCurrentPage, selectPrimaryColor, setPage } from "@/store/slices/appStatusSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function Button8() {
  const router = useRouter();
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);

  const handleButtonClick = e => {
    e.stopPropagation();
    router.push("/management");
    if (gCurrentPage === 0) {
      dispatch(setPage(1));
    }
  };

  const gPrimaryColor = useSelector(selectPrimaryColor);

  return (
    <button type="button" onClick={handleButtonClick}>
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7 35H34.3C34.9638 35 35.5 34.4638 35.5 33.8V13.55H15.7V35ZM34.3 5H15.7V11.15H35.5V6.2C35.5 5.53625 34.9638 5 34.3 5ZM5.5 6.2V33.8C5.5 34.4638 6.03625 35 6.7 35H13.3V5H6.7C6.03625 5 5.5 5.53625 5.5 6.2Z"
          fill={gPrimaryColor}
        />
      </svg>
    </button>
  );
}

export default Button8;
