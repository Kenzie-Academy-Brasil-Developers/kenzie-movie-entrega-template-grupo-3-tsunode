import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../../styles/Inputs";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

export const Input = ({ register, ...rest }: IInputProps) => {
  return <StyledInput {...register} {...rest} />;
};
