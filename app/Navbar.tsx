import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 border-b shadow-md p-3">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiOutlineMenuAlt2 size={24} />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/">Login</Link>
            </li>
            <li>
              <Link href="/">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
