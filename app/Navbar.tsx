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
        {!currentUser ? (
          <>
            <div className="dropdown dropdown-end block md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <HiOutlineMenuAlt2 size={24} />
              </div>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => router.push("/login")}
              className="justify-center items-center gap-3 cursor-pointer btn btn-ghost text-lg hidden md:flex"
            >
              Login
            </button>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border border-neutral-300"
            >
              <div className="w-8 rounded-full">
                <Image
                  src={currentUser?.image || "/images/placeholder.jpg"}
                  alt="Avatar"
                  fill
                  className="rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => {
                    signOut();
                    router.push("/");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
