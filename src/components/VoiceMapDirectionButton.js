import {
  selectCurrentTheme,
  selectCurrentVoiceStatus,
  setVoiceStatus,
} from "@/store/slices/appStatusSlice";
import { useDispatch, useSelector } from "react-redux";
import MapButtons from "./MapButtons";

const VoiceMapDirectionButton = () => {
  const dispatch = useDispatch();
  const gVoiceStatus = useSelector(selectCurrentVoiceStatus);
  const gTheme = useSelector(selectCurrentTheme);

  const handleVoiceButton = () => {
    if (gVoiceStatus === "ON") {
      dispatch(setVoiceStatus("OFF"));
    } else {
      dispatch(setVoiceStatus("ON"));
    }
  };

  const imageSrc = `/images/voice-maps-direction-${gVoiceStatus.toLowerCase()}-${gTheme.toLowerCase()}.svg`;
  return (
    <div>
      <MapButtons buttonImg={imageSrc} onClick={handleVoiceButton} />
    </div>
  );
};

export default VoiceMapDirectionButton;
