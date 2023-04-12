import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { addPage, removePage, selectAllPages, selectTotalPages } from "@/store/slices/pagesSlice";
import {
  selectBackgroundImage,
  selectCurrentPage,
  selectCurrentTheme,
  selectPrimaryColor,
  setPage,
} from "@/store/slices/appStatusSlice";

import image from "../../public/icons";

import LayoutIconButton from "@/components/LayoutIconButton";

import { MAX_PAGES, MIN_PAGES, THEME_KEYS } from "@/constants/constants";

function PageEditActionBar() {
  const dispatch = useDispatch();

  const gCurrentPage = useSelector(selectCurrentPage);
  const gAllPages = useSelector(selectAllPages);
  const gTotalPages = useSelector(selectTotalPages);
  const gTheme = useSelector(selectCurrentTheme);
  const gPrimaryColor = useSelector(selectPrimaryColor);
  const gBackgroundImage = useSelector(selectBackgroundImage);

  const fillColor =
    gBackgroundImage === undefined || gBackgroundImage === null
      ? `url(#paint0_linear_395_13163)`
      : gPrimaryColor;

  const renderPageButtonList = () => {
    return gAllPages.map((page, index) => (
      <LayoutIconButton
        key={index}
        layout={page.layout}
        isActive={gCurrentPage === index + 1}
        onClick={() => dispatch(setPage(index + 1))}
      />
    ));
  };

  return (
    <div className="flex justify-between items-center h-fit mt-3">
      {gAllPages.length > MIN_PAGES ? (
        <button
          className={gTheme == THEME_KEYS.SOPHISTICATED ? "w-[64px]" : "w-[56px] mb-[10px]"}
          type="button"
          onClick={() => {
            dispatch(
              removePage({
                pageNo: gCurrentPage,
              })
            );
            if (gCurrentPage === gAllPages.length) {
              dispatch(setPage(gCurrentPage - 1));
            }
          }}
        >
          {gTheme === THEME_KEYS.SOPHISTICATED ? (
            <svg
              width="64"
              height="64"
              viewBox="0 0 112 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_521_19121)">
                <rect x="11" width="89.0435" height="88" rx="22" fill="#090B0A" />
              </g>
              <g filter="url(#filter1_d_521_19121)">
                <rect
                  x="11"
                  width="89.0435"
                  height="88"
                  rx="22"
                  fill={fillColor}
                  fill-opacity="0.8"
                />
                <rect
                  x="13"
                  y="2"
                  width="85.0435"
                  height="84"
                  rx="20"
                  stroke="#D9D9D9"
                  stroke-width="4"
                />
              </g>
              <path
                d="M40.9382 60.667C40.9382 61.7721 41.3771 62.8319 42.1585 63.6133C42.9399 64.3947 43.9997 64.8337 45.1048 64.8337H65.9381C67.0432 64.8337 68.103 64.3947 68.8844 63.6133C69.6658 62.8319 70.1048 61.7721 70.1048 60.667V35.667H74.2715V31.5003H65.9381V27.3337C65.9381 26.2286 65.4992 25.1688 64.7178 24.3874C63.9364 23.606 62.8766 23.167 61.7715 23.167H49.2715C48.1664 23.167 47.1066 23.606 46.3252 24.3874C45.5438 25.1688 45.1048 26.2286 45.1048 27.3337V31.5003H36.7715V35.667H40.9382V60.667ZM49.2715 27.3337H61.7715V31.5003H49.2715V27.3337ZM47.1882 35.667H65.9381V60.667H45.1048V35.667H47.1882Z"
                fill="#D9D9D9"
              />
              <path
                d="M49.2715 39.833H53.4382V56.4997H49.2715V39.833ZM57.6048 39.833H61.7715V56.4997H57.6048V39.833Z"
                fill="#D9D9D9"
              />
              <defs>
                <filter
                  id="filter0_d_521_19121"
                  x="0"
                  y="0"
                  width="111.044"
                  height="111.375"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.375"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_521_19121"
                  />
                  <feOffset dy="12.375" />
                  <feGaussianBlur stdDeviation="6.1875" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_521_19121"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_521_19121"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_521_19121"
                  x="0"
                  y="0"
                  width="111.044"
                  height="111.375"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.375"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_521_19121"
                  />
                  <feOffset dy="12.375" />
                  <feGaussianBlur stdDeviation="6.1875" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_521_19121"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_521_19121"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_521_19121"
                  x1="55.5218"
                  y1="0"
                  x2="55.5218"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1A2433" />
                  <stop offset="1" stop-color="#20475E" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              width="56"
              height="56"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2575_249437)">
                <rect x="4" y="4" width="64" height="64" rx="8" fill="white" />
              </g>
              <path
                d="M25.212 47.9998C25.212 48.8035 25.5312 49.5743 26.0995 50.1425C26.6678 50.7108 27.4385 51.0301 28.2422 51.0301H43.3937C44.1974 51.0301 44.9682 50.7108 45.5365 50.1425C46.1048 49.5743 46.424 48.8035 46.424 47.9998V29.818H49.4544V26.7876H43.3937V23.7574C43.3937 22.9537 43.0745 22.1829 42.5062 21.6146C41.9379 21.0463 41.1672 20.7271 40.3635 20.7271H31.2725C30.4688 20.7271 29.6981 21.0463 29.1298 21.6146C28.5615 22.1829 28.2422 22.9537 28.2422 23.7574V26.7876H22.1816V29.818H25.212V47.9998ZM31.2725 23.7574H40.3635V26.7876H31.2725V23.7574ZM29.7574 29.818H43.3937V47.9998H28.2422V29.818H29.7574Z"
                fill="#8C8C8C"
              />
              <path
                d="M31.2725 32.8477H34.3028V44.9689H31.2725V32.8477ZM37.333 32.8477H40.3634V44.9689H37.333V32.8477Z"
                fill="#8C8C8C"
              />
              <defs>
                <filter
                  id="filter0_d_2575_249437"
                  x="0"
                  y="0"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2575_249437"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2575_249437"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
        </button>
      ) : (
        <div className="w-[100px]]"></div>
      )}
      <div>{renderPageButtonList()}</div>
      {gAllPages.length < MAX_PAGES ? (
        <button
          className={
            gTheme == THEME_KEYS.SOPHISTICATED
              ? "w-[64px] portrait:w-[5.424vw]"
              : "w-[56px] portrait:w-[4.746vw] mb-[10px]"
          }
          type="button"
          onClick={() => {
            dispatch(addPage());
            dispatch(setPage(gTotalPages + 1));
          }}
        >
          {gTheme === THEME_KEYS.SOPHISTICATED ? (
            <svg
              width="64"
              height="60"
              viewBox="0 0 112 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_395_13163)">
                <rect x="11.9561" width="89.0435" height="88" rx="22" fill="#090B0A" />
              </g>
              <g filter="url(#filter1_d_395_13163)">
                <rect
                  x="11.9561"
                  width="89.0435"
                  height="88"
                  rx="22"
                  fill={fillColor}
                  fill-opacity="0.8"
                />
                <rect
                  x="13.9561"
                  y="2"
                  width="85.0435"
                  height="84"
                  rx="20"
                  stroke="#D9D9D9"
                  stroke-width="4"
                />
              </g>
              <path
                d="M58.5618 41.9167V25.25H54.3952V41.9167H37.7285V46.0833H54.3952V62.75H58.5618V46.0833H75.2285V41.9167H58.5618Z"
                fill="#D9D9D9"
              />
              <defs>
                <filter
                  id="filter0_d_395_13163"
                  x="0.956055"
                  y="0"
                  width="111.044"
                  height="111.375"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.375"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_395_13163"
                  />
                  <feOffset dy="12.375" />
                  <feGaussianBlur stdDeviation="6.1875" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_395_13163"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_395_13163"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_395_13163"
                  x="0.956055"
                  y="0"
                  width="111.044"
                  height="111.375"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.375"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_395_13163"
                  />
                  <feOffset dy="12.375" />
                  <feGaussianBlur stdDeviation="6.1875" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_395_13163"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_395_13163"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_395_13163"
                  x1="56.4778"
                  y1="0"
                  x2="56.4778"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1A2433" />
                  <stop offset="1" stop-color="#20475E" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              width="56"
              height="56s"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2575_249459)">
                <rect x="4" y="4" width="64" height="64" rx="8" fill="white" />
                <path
                  d="M37.3331 34.3029V22.1816H34.3029V34.3029H22.1816V37.3331H34.3029V49.4544H37.3331V37.3331H49.4544V34.3029H37.3331Z"
                  fill="#8C8C8C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2575_249459"
                  x="0"
                  y="0"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2575_249459"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2575_249459"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
        </button>
      ) : (
        <div className="w-[100px] portrait:w-[8.475vw]"></div>
      )}
    </div>
  );
}

export default PageEditActionBar;
