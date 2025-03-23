"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN } from "@/constants";
import { clearAccessToken, setAccessToken } from "@/store/slices/authSlice";
import { setLocalStorage } from "@/services/auth";
import useCookies from "./useCookies";

export default function useToken() {
  const accessToken = useSelector((state: RootState) => state.auth?.accessToken);
  const dispatch = useDispatch();
  const {handleSetAccessToken: setAccessTokenCookie, removeCookie} = useCookies();

  const handleClearAccessToken = () => {
      dispatch(clearAccessToken());
      removeCookie(ACCESS_TOKEN);
  }

  const handleSetAccessToken = ({token, callback} : {token: string, callback?:()=>void}) => {
      setLocalStorage(ACCESS_TOKEN, token);
      setAccessTokenCookie({value: token});

      dispatch(setAccessToken({
        token,
        callback
      }));
  }

  return { 
    accessToken,
    dispatch,
    handleClearAccessToken,
    handleSetAccessToken
  };
}
