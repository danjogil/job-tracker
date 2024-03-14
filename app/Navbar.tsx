"use client";

import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
          {!currentUser ? (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </ul>
          ) : (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    signOut();
                    router.push("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
