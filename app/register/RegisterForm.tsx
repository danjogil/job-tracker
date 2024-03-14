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
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
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
        router.push("/dashboard");
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          id="name"
          label="Name"
          type="text"
          icon={FaUser}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="Email"
          type="text"
          icon={IoMdMail}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          icon={FaKey}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
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
