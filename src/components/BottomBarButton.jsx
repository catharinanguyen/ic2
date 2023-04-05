import { selectPrimaryColor } from "@/store/slices/appStatusSlice";
import { useSelector } from "react-redux";

function BottomBarButton(props) {
  const { onClick } = props;

  const gPrimaryColor = useSelector(selectPrimaryColor);

  const fillColor = gPrimaryColor;

  return (
    <button type="button" className="h-4 mx-auto" onClick={onClick}>
      {/* <svg
        width="174"
        height="4"
        viewBox="0 0 180 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" width="180" height="4" rx="2" fill={fillColor} />
      </svg> */}
      <svg
        width="1180"
        height="38"
        viewBox="0 0 1195 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.353516 30C0.353516 13.4315 13.785 0 30.3535 0H1164.35C1180.92 0 1194.35 13.4315 1194.35 30V38H0.353516V30Z"
          fill="#090B0A"
        />
        <path
          d="M0.353516 30C0.353516 13.4315 13.785 0 30.3535 0H1164.35C1180.92 0 1194.35 13.4315 1194.35 30V38H0.353516V30Z"
          fill="url(#paint0_linear_3832_47965)"
          fill-opacity="0.8"
        />
        <path
          d="M0.353516 30C0.353516 13.4315 13.785 0 30.3535 0H1164.35C1180.92 0 1194.35 13.4315 1194.35 30V38H0.353516V30Z"
          fill="url(#paint1_linear_3832_47965)"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M586.893 24.6831C587.761 25.5509 589.168 25.5509 590.036 24.6831L597.353 17.3656L604.671 24.6831C605.539 25.5509 606.946 25.5509 607.814 24.6831C608.681 23.8153 608.681 22.4082 607.814 21.5404L598.925 12.6515C598.057 11.7837 596.65 11.7837 595.782 12.6515L586.893 21.5404C586.025 22.4082 586.025 23.8153 586.893 24.6831Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3832_47965"
            x1="597.354"
            y1="0"
            x2="597.354"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1A2433" />
            <stop offset="1" stop-color="#20475E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3832_47965"
            x1="597.354"
            y1="0"
            x2="597.354"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1A2433" />
            <stop offset="1" stop-color="#20475E" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

export default BottomBarButton;
