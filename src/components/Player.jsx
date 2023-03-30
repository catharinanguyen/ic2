import {
  selectPlayerState,
  setPlayerState,
} from "@/store/slices/appStatusSlice";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Player = (props) => {
  const { playerState = "pause" } = props;
  const dispatch = useDispatch();
  const audioRef = useRef();
  const gPlayerState = useSelector(selectPlayerState);

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

  useEffect(() => {
    dispatch(setPlayerState("pause"));
    audioRef.current.pause();
  }, [dispatch]);

  const imagePlayer = `/images/${(gPlayerState || "").toLowerCase()}.svg`;

  return (
    <div className="absolute w-[398px] h-[130px] flex justify-around items-center bottom-[12px] right-[50%] translate-x-2/4 z-10 px-[58px]">
      <div className="cursor-pointer">
        <Image
          src={`/images/backward.svg`}
          alt="backward"
          width={64}
          height={64}
        />
      </div>
      <div className="cursor-pointer" onClick={onMusicPlay}>
        <Image src={imagePlayer} alt="Play" width={96} height={96} />
      </div>
      <div className="cursor-pointer">
        <Image
          src={`/images/forward.svg`}
          alt="forward"
          width={64}
          height={64}
        />
      </div>
      <audio
        ref={audioRef}
        controls
        preload="true"
        src="https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3"
        hidden
      ></audio>
    </div>
  );
};

export default Player;
