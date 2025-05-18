"use client";

import { Socials, nav_items } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50"> 
      <div className="w-full h-[65px]  shadow-lg bg-[#03001417] backdrop-blur-md z-40 container m-auto">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          <div className="h-auto w-auto flex flex-row cursor-pointer items-center">
            {/* <Image
            src="/gs.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Suhan Ahmed
            </span>
          </div>
          <ul className="hidden md:flex md:justify-between md:items-center gap-4">
            {nav_items.map((x, i) => (
              <li key={i}>
                <div className="text-white hover:text-violet-500 transition-colors capitalize cursor-pointer">
                  <Link href={`/#${x}`}>{x}</Link>
                </div>
              </li>
            ))}
          </ul>

          {/* <div className="md:hidden">
          {/* <MobileNavbar /> *
          Mobile Navbar
        </div> */}

          <div className="hidden md:flex md:flex-row gap-5">
            {Socials.map(({ name, icon, profile_link }) => (
              <Link
                href={profile_link}
                target="_blank"
                key={name}
                className="cursor-pointer"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
