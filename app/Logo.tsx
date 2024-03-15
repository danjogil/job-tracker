"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { MdWorkspaces } from "react-icons/md";

const Logo = ({ currentUser }: { currentUser?: User | null }) => {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        currentUser ? router.push("/dashboard") : router.push("/")
      }
      className="flex justify-center items-center gap-3 cursor-pointer btn btn-ghost text-xl"
    >
      <MdWorkspaces size={24} />
      <h1 className="font-bold text-xl">Job Tracker</h1>
    </div>
  );
};

export default Logo;
