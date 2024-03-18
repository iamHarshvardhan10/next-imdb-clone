import React from "react";
import { NavbarItem } from "./NavbarItem";
// import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
  return (
    <div className="flex font-bold dark:bg-gray-800 bg-gray-300 p-4 lg:text-lg justify-center gap-4 uppercase">
      <NavbarItem title="Trending" param="fetchTreding" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};
