/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isEmpty } from "lodash";
import { getToken } from "@/services/auth";
import { ROUTER } from "@/constants";

const withAuthorized = (WrappedComponent: React.ComponentType) => {
    const AuthComponent = (props: any) => {
        const router = useRouter();
        const {accessToken} = getToken();

        useEffect(() => {
            if (isEmpty(accessToken)) {
              router.push(ROUTER.LOGIN);
            }
          }, [accessToken]);

          return <WrappedComponent {...props} />;
    }

    return AuthComponent;
}

export default function AuthWrapper(Component: React.ComponentType) {
  return withAuthorized(Component);
}