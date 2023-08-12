import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center gap-4">
        <Image
          src="/assets/facebook.svg"
          width={28}
          height={28}
          alt="community"
        ></Image>
        <p className=" text-heading3-bold text-light-1 max-xs:hidden">
          Threads
        </p>
      </Link>
    </nav>
  );
};

export default Topbar;
