import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 w-full bg-red-700 ">
      <div className="flex justify-between items-center py-5 px-10 max-w-5xl mx-auto text-xl">
        <div>Logo</div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
