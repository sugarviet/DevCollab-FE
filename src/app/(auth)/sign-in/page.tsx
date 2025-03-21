'use client'

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Email, Password } from "@/components/Form";
import { Button } from "@/components/_shared/UI";
import { LOGIN_MUTATION } from "@/graphql/auth";
import { setLocalStorage } from "@/services/auth";
import { ACCESS_TOKEN, ROUTER } from "@/constants";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/store/slices/authSlice";

type SignInForm = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();
  const dispatch = useDispatch();
  console.log('loading', loading)

  const onSubmit = async (data: SignInForm) => {
    try {
      const response = await login({ variables: data });
      const token = get(response, "data.login.token", "");
      setLocalStorage(ACCESS_TOKEN, token);
      
      dispatch(setAccessToken({
        token,
        callback: () => {
          router.push(ROUTER.HOME);
        }
      }));
  
    } catch (err) {
      console.error("Lỗi đăng nhập:", err);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Đăng Nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Email register={register} error={errors.email} />
          </div>
          <div className="mb-6">
            <Password register={register} error={errors.password} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Đăng nhập
          </Button>
        </form>
      </div>
    </div>
  );
}
