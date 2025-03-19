/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "@/components/_shared/UI";

type ConfirmPasswordProps = {
  register: UseFormRegister<any>;
  name?: string;
  error?: FieldError;
};

const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ register, error }) => {

  return (
    <div>
      <label className="block text-gray-700">Nhập Lại Mật khẩu</label>
      <div className="relative">
        <Input
          type={"password"}
          {...register("confirmPassword", {
            required: "Mật khẩu không được để trống",
            minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
          })}
          placeholder="Nhập mật khẩu"
          variant={error ? "error" : "default"}
          className="w-full pr-10"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default ConfirmPassword;
