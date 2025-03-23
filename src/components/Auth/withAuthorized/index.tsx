/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { isEmpty } from "lodash";
import useToken from "../hooks/useToken";
import useNavigation from "@/hooks/useNavigation";

const withAuthorized = (WrappedComponent: React.ComponentType) => {
    const AuthComponent = (props: any) => {
        const {accessToken} = useToken();
        const {handleGotoLogin} = useNavigation();

        useEffect(() => {
            if (isEmpty(accessToken)) {
              handleGotoLogin();
            }
          }, [accessToken, handleGotoLogin]);

          return <WrappedComponent {...props} />;
    }

    return AuthComponent;
}

export default withAuthorized;