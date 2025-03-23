'use client'

import { ACCESS_TOKEN } from '@/constants';
import Cookies from 'universal-cookie';

const useCookies = () => {
    const cookies = new Cookies();

    const handleSetAccessToken = ({value = "Viet Dang"}: {value: string}) => {
        cookies.set(ACCESS_TOKEN, value, { path: '/' });
    }

    const removeCookie = (name: string) => [
      cookies.remove(name)
    ]

  return {
    handleSetAccessToken,
    removeCookie
  }
}

export default useCookies