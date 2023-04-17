import { THEME_KEYS } from "@/constants/constants";
import { selectBackgroundImage, selectCurrentTheme } from "@/store/slices/appStatusSlice";
import { useSelector } from "react-redux";

function BottomBarButton(props) {
  const { onClick } = props;

  const gTheme = useSelector(selectCurrentTheme);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  return (
    <button
      type="button"
      className={
        "mx-auto h-[38px]  w-full flex justify-center items-center " +
        (gTheme === THEME_KEYS.SOPHISTICATED
          ? gBackgroundImage === undefined || gBackgroundImage === null
            ? "rounded-t-[30px] bg-gradient-to-r from-[#1A2433] to-[#20475E]"
            : "rounded-t-[30px] bg-[#343332]"
          : "bg-black")
      }
      onClick={onClick}
    >
      <svg
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.53955 12.6821C2.40738 13.55 3.81441 13.55 4.68224 12.6821L11.9998 5.36459L19.3173 12.6821C20.1852 13.55 21.5922 13.55 22.46 12.6821C23.3278 11.8143 23.3278 10.4073 22.46 9.53944L13.5711 0.650548C12.7033 -0.217284 11.2963 -0.217284 10.4284 0.650548L1.53955 9.53944C0.671714 10.4073 0.671714 11.8143 1.53955 12.6821Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default BottomBarButton;
