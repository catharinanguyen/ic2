/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux";
import { get } from "lodash";

import { selectUser } from "@/store/slices/userSlice";
import { selectCurrentTheme } from "@/store/slices/appStatusSlice";

import { THEME_KEYS } from "@/constants/constants";

function UserAvatarButton(props) {
  const { onClick } = props;

  const gUser = useSelector(selectUser);
  const gTheme = useSelector(selectCurrentTheme);

  const photoURL = get(gUser, "photoURL");
  const userName = get(gUser, "displayName");

  return (
    <div className="flex items-center">
      <div className="avatar">
        <div
          className="w-10 rounded-full"
          style={{
            borderColor: gTheme == THEME_KEYS.SOPHISTICATED ? 'white' : '#8c8c8c',
            color: gTheme == THEME_KEYS.SOPHISTICATED ? 'white' : '#8c8c8c',
          }}
        >
          <button
            onClick={onClick}
          >
            <img src={photoURL} alt="avatar" />
          </button>
        </div>
      </div>
      <div className="w-2" />
      <div
        style={{
          borderColor: gTheme == THEME_KEYS.SOPHISTICATED ? 'white' : '#8c8c8c',
          color: gTheme == THEME_KEYS.SOPHISTICATED ? 'white' : '#8c8c8c',
        }}
      >{userName}</div>
    </div>
  );
}

export default UserAvatarButton;
