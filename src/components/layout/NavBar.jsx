"use client";
import Closesvg from "@/icons/Close.svg";
import GithubSvg from "@/icons/github.svg";
import MoonSvg from "@/icons/moon.svg";
import OpenMenu from "@/icons/openmenu.svg";
import RightArrowSvg from "@/icons/rightarrow.svg";
import SaasStarterSvg from "@/icons/saasstarter.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const menuItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/documentation", label: "Documentation" },
    { href: "/", label: "Login", mobileOnly: true },
    { href: "/", label: "Sign Up", mobileOnly: true },
  ];

  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathName = usePathname();
  return (
    <div
      className="flex justify-center fixed top-0 w-[100%] bg-black/30 !backdrop-blur-lg border-b
     border-neutral-800 z-999  "
    >
      <div className="text-white !py-3 flex justify-between items-center px-5 lg:px-0 w-full lg:w-[75%] ">
        <div className="flex gap-10 items-center">
          <Link href="/">
            <div className="flex gap-2 text-xl font-medium items-center">
              <SaasStarterSvg />
              <h1>SaaS Starter</h1>
            </div>
          </Link>
          <ul className="md:flex hidden items-center gap-8 font-semibold text-gray-400 ">
            {menuItems
              .filter((item) => !item.mobileOnly)
              .map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`hover:text-gray-300 ${
                    pathName === item.href ? "text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </ul>
        </div>

        <div>
          <button
            className="hidden md:flex items-center bg-gray-100 hover:bg-gray-200 gap-1  text-black px-6 py-1.5 rounded-full
        "
          >
            Sign in
            <RightArrowSvg />
          </button>

          <div>
            {isMenuShown ? (
              <button
                className="text-gray-400 p-2 hover:bg-neutral-800 rounded-full"
                onClick={() => setIsMenuShown(false)}
              >
                <Closesvg />
              </button>
            ) : (
              <button
                className="md:hidden text-gray-400 p-2 hover:bg-neutral-800 rounded-full"
                onClick={() => setIsMenuShown(true)}
              >
                <OpenMenu />
              </button>
            )}
          </div>
        </div>
      </div>
      {pathName === "/guides" && (
        <hr className="border-neutral-700 !w-screen mx-auto absolute  !left-0" />
      )}
      {isMenuShown && (
        <div className="bg-black z-20 w-full h-screen fixed ">
          <ul className="md:hidden flex flex-col px-5 py-5 gap-3 font-semibold text-white ">
            {menuItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setIsMenuShown(false)}
                className={`hover:text-gray-300 border-b-[0.1px] border-gray-500 opacity-60 pb-3 ${
                  pathName === item.href ? "text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>

          <div className=" flex gap-4 items-center justify-end px-7 my-7 ">
            <GithubSvg />

           <MoonSvg />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
