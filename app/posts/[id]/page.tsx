import Link from "next/link";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const PostDetail = ({ params }: Props) => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center text-2xl justify-center">
      <p>Post Detail</p>
      <p>this is the dynamic part : {params.id}</p>
      <Link href={"/posts"}>Back</Link>
    </div>
  );
};

export default PostDetail;
