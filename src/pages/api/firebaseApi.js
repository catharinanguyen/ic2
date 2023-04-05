import { signInWithPopup } from "firebase/auth";

import { auth } from "@/firebase/firebaseApp";

export const signIn = async (provider) => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
}
