"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveNav = ({ children }) => {
  const path = usePathname();

  return (
    <Link
      href={`/${children === "Home" ? "" : children.toLowerCase()}`}
      className={`hover:underline ${
        children.toLowerCase() === path.replace("/", "") && "underline"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveNav;
