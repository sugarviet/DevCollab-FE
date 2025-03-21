"use client";

import { useState, useEffect } from "react";
import { ACCESS_TOKEN } from "@/constants";

export default function useGetAccessToken() {
  const [token, setToken] = useState<string | null>(localStorage.getItem(ACCESS_TOKEN));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem(ACCESS_TOKEN));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setToken(null);
  };

  return { token, setToken, removeToken };
}
