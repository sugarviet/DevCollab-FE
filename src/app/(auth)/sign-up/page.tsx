"use client";

import { useForm } from "react-hook-form";
import { ConfirmPassword, Email, Password } from "@/components/Form";
import { Button } from "@/components/_shared/UI";
import { useRouter } from "next/navigation";

type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>();

  const router = useRouter();

  const onSubmit = async (data: SignUpForm) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Mật khẩu không khớp" });
      return;
    }
    console.log("Đăng ký với:", data); 
   router.push("/auth/sign-in"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Đăng Ký</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <Email register={register} error={errors.email} />
          </div>

          {/* Mật khẩu */}
          <div className="mb-4">
            <Password 
              register={register} 
              error={errors.password} 
            />
          </div>

          {/* Xác nhận mật khẩu */}
          <div className="mb-4">
            <ConfirmPassword
              register={register}
              error={errors.confirmPassword}
            />
          </div>

          {/* Nút đăng ký */}
          <Button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Đăng ký
          </Button>
        </form>

        {/* Chuyển sang đăng nhập */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <a href="/auth/sign-in" className="text-blue-500 hover:underline">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
}
