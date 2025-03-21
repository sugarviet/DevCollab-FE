import { ACCESS_TOKEN } from "@/constants";

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