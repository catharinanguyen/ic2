import {
  selectCurrentPage,
  selectCurrentSongId,
  selectPlayerState,
  setPlayerState,
  setSongId,
} from "@/store/slices/appStatusSlice";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import songs from "../data/songs.json";
import { WIDGET_TYPES } from "@/constants/constants";
import { selectPageInfo } from "@/store/slices/pagesSlice";

const Player = (props) => {
  const { playerState = "pause", widgetType } = props;
  const dispatch = useDispatch();

  const audioRef = useRef();
  const gPlayerState = useSelector(selectPlayerState);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const selectSongId = useSelector(selectCurrentSongId);
  console.log(widgetType);

  if (selectSongId < 0 || selectSongId > songs.length - 1) {
    selectSongId(0);
  }
  const onMusicPlay = (e) => {
    e.preventDefault();

    if (playerState === gPlayerState.toLowerCase()) {
      audioRef.current.play();
      dispatch(setPlayerState("play"));
    } else {
      audioRef.current.pause();
      dispatch(setPlayerState("pause"));
    }
  };

  const onBackwardClick = () => {
    if (selectSongId > 0) {
      dispatch(setSongId(selectSongId - 1));
    }
  };

  const onForwardClick = () => {
    if (selectSongId < songs.length - 1) {
      dispatch(setSongId(selectSongId + 1));
    }
  };

  useEffect(() => {
    dispatch(setPlayerState("play"));
    audioRef.current.play();
  }, [selectSongId, dispatch]);

  useEffect(() => {
    audioRef.current.pause();
    dispatch(setPlayerState("pause"));
  }, [dispatch]);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
  };

  const imagePlayer = `/images/${(gPlayerState || "").toLowerCase()}.svg`;
  const imageBackWard = `/images/backward-${(
    widgetType || ""
  ).toLowerCase()}.svg`;
  const imageForWard = `/images/forward-${(
    widgetType || ""
  ).toLowerCase()}.svg`;
  return (
    <div>
      {/* <ProgressBar {...{ timeProgress, duration }} /> */}
      <div className="absolute w-[398px] h-[123px] flex justify-around items-center bottom-[12px] right-[50%] translate-x-2/4 z-10 px-[58px]">
        <div className="cursor-pointer" onClick={onBackwardClick}>
          <Image src={imageBackWard} alt="backward" width={64} height={64} />
        </div>
        <div className="cursor-pointer" onClick={onMusicPlay}>
          <Image src={imagePlayer} alt="Play" width={96} height={96} />
        </div>
        <div className="cursor-pointer" onClick={onForwardClick}>
          <Image src={imageForWard} alt="forward" width={64} height={64} />
        </div>
        <audio
          ref={audioRef}
          controls
          preload="true"
          src={songs[selectSongId].url}
          onLoadedMetadata={onLoadedMetadata}
          //   onLoadedMetadata={() => {
          //     dispatch({
          //         type: "SET_DURATION",
          //         payload: audioRef.current.duration,
          //     });

          //     setInterval(() => {
          //         dispatch({
          //             type: "SET_CURRENT_LOCATION",
          //             payload: audioRef.current.currentTime,
          //         });
          //     }, 1000);
          // }}
          hidden
          autoPlay
        ></audio>
      </div>
    </div>
  );
};

export default Player;
