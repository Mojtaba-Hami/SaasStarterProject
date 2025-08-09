import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="">
      <div className="mt-20 py-20 border-y border-neutral-800 text-white ">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-0 w-[95%] mx-auto lg:w-full">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h1 className="font-semibold">Company</h1>
              <li className="list-none fontlight font-normal hover:!text-white">
                Enterprise
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                About
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Terms
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Privacy
              </li>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2">
              <h1 className="font-semibold">Product</h1>
              <li className="list-none fontlight font-normal hover:!text-white">
                Customization
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Security
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Customers
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Changelog
              </li>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h1 className="font-semibold">Docs</h1>
              <li className="list-none fontlight font-normal hover:!text-white">
                Introduction
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Installation
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Components
              </li>
              <li className="list-none fontlight font-normal hover:!text-white">
                Code Blocks
              </li>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <label className="font-semibold" htmlFor="">
                Subscribe to our newsletter
              </label>
              <input
                className="border px-4 py-2 rounded-full w-[400px]  border-neutral-800 "
                type="text"
                placeholder="janedoe@example.com"
              />
              <button className="py-1.5 px-5 rounded-full bg-white text-black w-fit">
                Subscibe
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-white flex justify-between items-center flex-col sm:flex-row">
          <p className="fontlight ">
            Built by mickasmt. Hosted on Vercel. Illustrations by Popsy
          </p>
          <div>
            <div className=" flex gap-4 items-center justify-end px-7 my-7 ">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
