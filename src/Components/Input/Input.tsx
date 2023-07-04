import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

export const Input = ({ register, ...rest }: IInputProps) => {
  return <input {...register} {...rest} />;
};
