/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "@/components/_shared/UI";

type EmailInputProps = {
  register: UseFormRegister<any>;
  error?: FieldError;
};

const EmailInput: React.FC<EmailInputProps> = ({ register, error }) => {
  return (
    <div>
      <label className="block text-gray-700">Email</label>
      <Input
        type="email"
        {...register("email", {
          required: "Email không được để trống",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Email không hợp lệ",
          },
        })}
        placeholder="Nhập email của bạn"
        variant={error ? "error" : "default"}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default EmailInput;
