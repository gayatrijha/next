import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around bg-slate-800 text-white py-4">
        <ul className="flex gap-6">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
