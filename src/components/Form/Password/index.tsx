/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { useState } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "@/components/_shared/UI";

type PasswordInputProps = {
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-gray-700">Mật khẩu</label>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Mật khẩu không được để trống",
            minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
          })}
          placeholder="Nhập mật khẩu"
          variant={error ? "error" : "default"}
          className="w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
