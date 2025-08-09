import React from "react";

export default function GuidesPage() {
  return (
    <div className=" py-8 text-white flex flex-col gap-4 min-h-[500px] px-5 mt-15">
      <div className="flex gap-2 items-center font-medium">
        <span className="fontlight ">Docs</span>
        <span className="fontlight ">
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
            className="lucide lucide-chevron-right size-4"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
        <span className="text-purple-400 ">Guides</span>
      </div>

      <p className="text-4xl font-bold">Guides</p>
      <p className="fontlight text-xl">
        This section includes end-to-end guides for developing Next.js 13 apps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="border border-neutral-800 p-5 rounded-xl flex flex-col gap-3">
          <p className="font-semibold text-xl">
            Using NextAuth.js with Next.14
          </p>
          <p className="text-neutral-400">
            How to use Auth.js v5 in server components.
          </p>
          <p className="text-neutral-400">November 23, 2022</p>
        </div>
        <div>
          <div className="border border-neutral-800 p-5 rounded-xl flex flex-col gap-3">
            <p className="font-semibold text-xl">
              Build a blog using ContentLayer and MDX.
            </p>
            <p className="text-neutral-400">
              Learn how to use ContentLayer to build a blog with Next.js
            </p>
            <p className="text-neutral-400">November 18, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
