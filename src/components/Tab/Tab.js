import React from "react";
import "./Tab.css";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <div className="tab sticky top-0 box-border h-screen px-14">
      <h1 className="text-white  mt-10 text-2xl font-bold animate-pulse">
        The Audio DB
      </h1>

      <ul className="mt-14">
        <li className="cursor-pointer text-white hover:text-gray-500">
          <Link className="flex items-center gap-3" to="/">
            <HomeIcon className="w-7 "></HomeIcon>
            <h1 className="font-bold">Home</h1>
          </Link>
        </li>

        <li className="cursor-pointer text-white hover:text-gray-500 mt-8">
          <Link className="flex items-center gap-3" to="search">
            <SearchIcon className="w-7 "></SearchIcon>
            <h1 className="font-bold">Search</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
