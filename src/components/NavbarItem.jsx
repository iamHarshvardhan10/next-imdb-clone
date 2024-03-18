"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const NavbarItem = ({ title, param }) => {
  const searchparams = useSearchParams();
  const genre = searchparams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-gray-900 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-2 decoration-gray-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};
