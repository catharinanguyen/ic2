import Image from "next/image";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { signIn } from "@/pages/api/firebaseApi";

import { loginSuccess } from "@/store/slices/userSlice";

import BlankPopup from "@/components/popups/BlankPopup";
import { useDispatch } from "react-redux";

function LoginPopup(props) {
  const dispatch = useDispatch();

  const provider = new GoogleAuthProvider();

  const handleLoginWithGoogle = () => {
    signIn(provider)
      .then(user => {
        dispatch(loginSuccess(user));
      });
  }

  return (
    <BlankPopup {...props}>
      <div className="flex flex-col items-center justify-center">
        <Image src="/icons/login-icon.jpeg" alt="backward" width={88} height={83} />
        <p className="font-bold mt-2">Welcome!</p>
        <button
          className="btn btn-outline font-thin border-warmGray-300 w-[300px] mt-4"
          style={{
            textTransform: "none",
          }}
          onClick={handleLoginWithGoogle}
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.106 12.592C23.106 11.7286 23.0345 11.0986 22.8798 10.4453H12.8203V14.3419H18.725C18.606 15.3103 17.9632 16.7686 16.5346 17.7486L16.5145 17.879L19.6952 20.2938L19.9155 20.3153C21.9393 18.4836 23.106 15.7886 23.106 12.592" fill="#4285F4" />
            <path d="M12.8195 22.858C15.7123 22.858 18.1408 21.9246 19.9147 20.3146L16.5337 17.7479C15.629 18.3662 14.4147 18.7979 12.8195 18.7979C9.98616 18.7979 7.58143 16.9663 6.7242 14.4346L6.59856 14.445L3.2913 16.9534L3.24805 17.0712C5.00993 20.5012 8.62897 22.858 12.8195 22.858Z" fill="#34A853" />
            <path d="M6.72446 14.4349C6.49828 13.7816 6.36738 13.0815 6.36738 12.3582C6.36738 11.6348 6.49828 10.9348 6.71257 10.2815L6.70657 10.1424L3.35786 7.59375L3.2483 7.64482C2.52214 9.06817 2.10547 10.6665 2.10547 12.3582C2.10547 14.0499 2.52214 15.6481 3.2483 17.0715L6.72446 14.4349" fill="#FBBC05" />
            <path d="M12.8195 5.91837C14.8314 5.91837 16.1885 6.77003 16.9624 7.48175L19.9862 4.5884C18.1291 2.89674 15.7123 1.8584 12.8195 1.8584C8.629 1.8584 5.00994 4.21505 3.24805 7.64502L6.71233 10.2817C7.58145 7.75006 9.9862 5.91837 12.8195 5.91837" fill="#EB4335" />
          </svg>
          <div className="w-2" />
          Sign in with Google
        </button>
      </div>
    </BlankPopup>
  );
}

export default LoginPopup;
