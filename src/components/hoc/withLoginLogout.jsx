/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { logout, selectUser } from "@/store/slices/userSlice";

import LoginPopup from "@/components/popups/LoginPopup";
import LogoutPopup from "@/components/popups/LogoutPopup";

const withLoginLogout = WrappedComponent => {
  function WithLoginLogout(props) {
    const dispatch = useDispatch();
    const router = useRouter();

    const gUser = useSelector(selectUser);

    const [localState, updateLocalState] = useReducer(
      (prev, next) => {
        return { ...prev, ...next };
      },
      {
        showLogoutPopup: false,
      }
    );

    const handleLogout = () => {
      dispatch(logout());
      updateLocalState({ showLogoutPopup: false });
    };

    useEffect(() => {
      const path = window.location.pathname;
      if (path !== '/' && !gUser.email) {
        router.push('/');
      }
    }, [router, gUser]);

    return (
      <>
        <div>
          <WrappedComponent
            {...props}
            showLogoutPopup={(value) => updateLocalState({ showLogoutPopup: value })}
          />
        </div>
        <LoginPopup isVisible={!gUser.email} />
        <LogoutPopup
          isVisible={localState.showLogoutPopup}
          onOk={handleLogout}
          onCancel={() => updateLocalState({ showLogoutPopup: false })}
        />
      </>
    );
  }

  return WithLoginLogout;
};

export default withLoginLogout;
