"use client";

import { IconType } from "react-icons/lib";

const Input = ({
  title,
  type,
  icon: Icon,
}: {
  title: string;
  type: string;
  icon: IconType;
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <Icon />
      <input type={type} className="grow" placeholder={title} />
    </label>
  );
};

export default Input;
