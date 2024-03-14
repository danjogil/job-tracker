"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Input from "../components/Input";
import { IoMdMail } from "react-icons/io";
import { FaUser, FaKey } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form className="flex flex-col gap-3">
        <Input title="Email" type="text" icon={IoMdMail} />
        <Input title="Name" type="text" icon={FaUser} />
        <Input title="Password" type="password" icon={FaKey} />
        <button className="btn btn-neutral" disabled={isLoading}>
          Continue
        </button>
      </form>
      <div className="divider"></div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => signIn("google")}
          className="btn btn-outline"
          disabled={isLoading}
        >
          {<FcGoogle />} Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="btn btn-outline"
          disabled={isLoading}
        >
          {<AiFillGithub />} Github
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
