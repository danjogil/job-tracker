"use client";

import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <nav className="navbar bg-base-100 shadow p-3 mb-5">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiOutlineMenuAlt2 size={24} />
          </div>

          <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">
            {currentUser ? (
              <>
                <div className="p-2 flex justify-center items-center gap-5">
                  <p className="font-semibold text-lg">{currentUser?.name}</p>
                  <div className="avatar">
                    <div className="w-10 rounded">
                      <Image
                        src={currentUser?.image || "/images/placeholder.jpg"}
                        alt="Avatar"
                        fill
                        className="rounded-full border"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <ul className="flex flex-col gap-2">
                  <li>
                    <button
                      className="py-2 px-4 font-medium"
                      onClick={() => {
                        signOut();
                        router.push("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="flex flex-col gap-2">
                <li>
                  <Link className="py-2 px-4 font-medium" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="py-2 px-4 font-medium" href="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
