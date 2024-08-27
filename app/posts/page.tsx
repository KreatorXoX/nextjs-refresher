import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center gap-10 flex-col text-2xl">
      <Link href={"/posts/1"}>Post 1</Link>
      <Link href={"/posts/2"}>Post 2</Link>
      <Link href={"/posts/3"}>Post 3</Link>
    </div>
  );
};

export default page;
