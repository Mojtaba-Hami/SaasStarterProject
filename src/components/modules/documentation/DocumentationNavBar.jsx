"use client";
import Closesvg from "@/icons/Close.svg";
import GithubSvg from "@/icons/github.svg";
import OpenMenu from "@/icons/openmenu.svg";
import RightArrowSvg from "@/icons/rightarrow.svg";
import SaasStarterSvg from "@/icons/saasstarter.svg";
import { Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DocumentationPageNavBar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathName = usePathname();

  return (
    <div
      className="flex justify-center fixed top-0 w-[100%] bg-black/30 !backdrop-blur-lg border-b left-0
     border-neutral-800 z-999 "
    >
      <div className="text-white !py-3 flex justify-between items-center mx-5 lg:px-0  w-[100%]     ">
        <div className="flex gap-10 items-center">
          <Link href="/">
            <div className="flex gap-2 text-xl font-medium items-center">
              <SaasStarterSvg />
              <h1>SaaS Starter</h1>
            </div>
          </Link>
          <ul className="md:flex hidden items-center gap-8 font-semibold text-gray-400 ">
            <Link
              className={`hover:text-gray-300" ${
                pathName === "/documentation" && "text-white"
              }`}
              href="/documentation"
            >
              Documentation
            </Link>
            <Link
              className={`hover:text-gray-300 ${
                pathName === "/guides" && "text-white"
              }`}
              href="/guides"
            >
              guides
            </Link>
          </ul>
        </div>

        <div>
          <div className="hidden md:flex gap-2 items-center">
            <input
              className=" hidden lg:flex px-4 py-1.5 rounded-md   border border-neutral-800 w-75"
              placeholder="Search documentation... "
            />
            <span className=" hidden lg:flex px-2 fontlight border border-neutral-800 !h-fit -ml-13   mr-5  rounded text-lg">
              ⌘ <span className="text-xs mt-1.5">k</span>
            </span>
            <GithubSvg className="size-7" />

            <button
              className=" flex items-center bg-gray-100 hover:bg-gray-200 gap-1  text-black px-6 py-1.5 rounded-full
        "
            >
              Sign in
             <RightArrowSvg />
            </button>
          </div>

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
      {isMenuShown && (
        <div className="bg-[#0a0a0a] pb-20 z-20 !w-full h-screen overflow-y-scroll fixed right-0 ">
          <ul className="md:hidden flex flex-col px-5 py-5 gap-3 font-semibold text-white ">
            <Link
              onClick={() => setIsMenuShown(false)}
              className="hover:text-gray-300 !text-white border-b-[0.1px] border-neutral-800  pb-3"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              onClick={() => setIsMenuShown(false)}
              className="hover:text-gray-300 !text-white border-b-[0.1px] border-neutral-800  pb-3"
              href="/guides"
            >
              Guides
            </Link>
            <Link
              onClick={() => setIsMenuShown(false)}
              className="hover:text-gray-300 !text-white border-b-[0.1px] border-neutral-800  pb-3"
              href="/"
            >
              Login
            </Link>
            <Link
              onClick={() => setIsMenuShown(false)}
              className="hover:text-gray-300 !text-white "
              href="/"
            >
              Sign Up
            </Link>
          </ul>

          <div className="text-white px-5 gap-4 py-5 flex flex-col">
            <h1 className="text-lg font-semibold">Getting Started</h1>
            <Link
              href="/documentation "
              className="px-3 text-blue-400  hover:underline"
            >
              Introduction
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400400 text-neutral-300 hover:underline"
            >
              Installation
            </Link>
          </div>

          <div className="text-white px-5 gap-4 py-5 flex flex-col">
            <h1 className="text-lg font-semibold">Configuration</h1>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Authentification
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Blog
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Components
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Config files
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Database
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Email
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Layouts
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Markdown files
            </Link>
            <Link
              href="/documentation "
              className="px-3 text-neutral-400  hover:underline"
            >
              Subscriptions
            </Link>
          </div>

          <div className=" flex gap-4 items-center justify-end px-7 my-7 ">
            <GithubSvg className="size-7 fill-white" />

           <Moon />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationPageNavBar;
