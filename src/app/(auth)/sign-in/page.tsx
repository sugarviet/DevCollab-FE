'use client'

import { useForm } from "react-hook-form";
import { Email, Password } from "@/components/Form";
import { Button } from "@/components/_shared/UI";

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

  const onSubmit = (data: SignInForm) => {
    console.log("Đăng nhập với:", data);
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
