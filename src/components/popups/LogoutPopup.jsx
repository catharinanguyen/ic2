import { useSelector } from "react-redux";

import {
  selectCurrentTheme,
  selectPrimaryColor,
} from "@/store/slices/appStatusSlice";

import BlankPopup from "@/components/popups/BlankPopup";

import { THEME_KEYS } from "@/constants/constants";

function LogoutPopup(props) {
  const { onOk, onCancel } = props;

  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gTheme = useSelector(selectCurrentTheme);

  return (
    <BlankPopup {...props}>
      <div className="flex flex-col items-center justify-center">
        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.80957" y="0.8125" width="74.3801" height="74.375" rx="37.1875" fill="#D8EEFF" />
          <path d="M54.583 39.4609L47.3643 46.6797C47.1722 46.8711 46.9444 47.0227 46.6937 47.1259C46.443 47.2291 46.1744 47.2819 45.9033 47.2812C45.3565 47.2789 44.8323 47.063 44.4424 46.6797C44.2501 46.4881 44.0975 46.2604 43.9934 46.0097C43.8893 45.759 43.8358 45.4902 43.8358 45.2188C43.8358 44.9473 43.8893 44.6785 43.9934 44.4278C44.0975 44.1771 44.2501 43.9494 44.4424 43.7578L48.1377 40.0625H33.8721C33.3251 40.0625 32.8005 39.8452 32.4137 39.4584C32.0269 39.0716 31.8096 38.547 31.8096 38C31.8096 37.453 32.0269 36.9284 32.4137 36.5416C32.8005 36.1548 33.3251 35.9375 33.8721 35.9375H48.1377L44.4424 32.2422C44.0549 31.8547 43.8372 31.3292 43.8372 30.7812C43.8372 30.2333 44.0549 29.7078 44.4424 29.3203C44.8298 28.9328 45.3554 28.7152 45.9033 28.7152C46.4513 28.7152 46.9768 28.9328 47.3643 29.3203L54.583 36.5391C54.7753 36.7307 54.9279 36.9584 55.032 37.2091C55.1361 37.4598 55.1896 37.7285 55.1896 38C55.1896 38.2715 55.1361 38.5402 55.032 38.7909C54.9279 39.0416 54.7753 39.2693 54.583 39.4609ZM33.8721 51.0625H24.9346V24.9375H33.8721C34.4191 24.9375 34.9437 24.7202 35.3305 24.3334C35.7173 23.9466 35.9346 23.422 35.9346 22.875C35.9346 22.328 35.7173 21.8034 35.3305 21.4166C34.9437 21.0298 34.4191 20.8125 33.8721 20.8125H24.2471C23.3368 20.817 22.4651 21.1806 21.8214 21.8243C21.1777 22.468 20.8141 23.3397 20.8096 24.25V51.75C20.8141 52.6603 21.1777 53.532 21.8214 54.1757C22.4651 54.8194 23.3368 55.183 24.2471 55.1875H33.8721C34.4191 55.1875 34.9437 54.9702 35.3305 54.5834C35.7173 54.1966 35.9346 53.672 35.9346 53.125C35.9346 52.578 35.7173 52.0534 35.3305 51.6666C34.9437 51.2798 34.4191 51.0625 33.8721 51.0625Z" fill="#007EE5" />
        </svg>
        <p className="font-bold mt-2">Come back soon!</p>
        <p className="mt-5 text-center">Are you sure you want to logout of Interactive Console?</p>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="btn bg-[#e3e3e3] border-0 text-coolGray-900 font-thin w-[150px]  hover:text-white"
          style={{
            textTransform: 'none',
          }}
          onClick={onCancel}
        >
          Cancel
        </button>
        <div className="w-5" />
        <button
          style={{
            backgroundColor: gTheme == THEME_KEYS.SOPHISTICATED ? gPrimaryColor : '#e3e3e3',
            color: gTheme == THEME_KEYS.SOPHISTICATED ? 'white' : '#8c8c8c',
            textTransform: 'none',
          }}
          className="btn bg-[#e3e3e3] border-0 text-coolGray-900 font-normal w-[150px] hover:bg-white"
          onClick={onOk}
        >
          Sign out
        </button>
      </div>
    </BlankPopup>
  );
}

export default LogoutPopup;
