import { ACCESS_TOKEN } from "@/constants";

const fallbackStorage: Record<string, string> = {};

export const getToken = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    return {
        accessToken
    }
}

export const setLocalStorage = (key: string, value : string) => {
    localStorage.setItem(key, value);
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}

export const getAccessToken = () => {
    if (typeof window === "undefined") {
      return fallbackStorage[ACCESS_TOKEN] || "";
    }
  
    return localStorage.getItem(ACCESS_TOKEN) || "";
  };