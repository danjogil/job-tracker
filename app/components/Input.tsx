"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps {
  id: string;
  icon: IconType;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  id,
  type = "text",
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <label
      className={`input input-bordered flex items-center gap-2 ${
        errors[id] && "border border-rose-500"
      }`}
    >
      <Icon />
      <input
        id={id}
        {...register(id, { required })}
        type={type}
        className="grow"
        placeholder={label}
        disabled={disabled}
      />
    </label>
  );
};

export default Input;
