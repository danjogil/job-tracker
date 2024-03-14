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
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        console.log("success");
        router.push("/dashboard");
        router.refresh();
      }

      if (callback?.error) {
        console.log("error");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
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
          {<FcGoogle />} Continue with Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="btn btn-outline"
          disabled={isLoading}
        >
          {<AiFillGithub />} Continue with Github
        </button>
      </div>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-col sm:flex-row items-center gap-2">
          <div>First time using Job Tracker?</div>
          <div
            onClick={() => router.push("/register")}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
