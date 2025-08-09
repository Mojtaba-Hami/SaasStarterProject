import Documentationsidebar from "@/components/modules/documentation/DocumentationSideBar";
import React from "react";

export default function DocumentationPage() {
  return (
    <div className="text-white px-5">
      <div className="grid grid-cols-10">
        <div className="hidden md:grid md:col-span-2">
          <Documentationsidebar />
        </div>
        <div className="col-span-8  py-5 flex flex-col gap-4">
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
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right size-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
            <span className="text-purple-400 ">Introduction</span>
          </div>
          <p className="text-4xl font-bold">Introduction</p>
          <p className="fontlight text-xl">
            Welcome to the Next SaaS Stripe Starter documentation.
          </p>
          <div className="flex flex-col  gap-8 mt-10 font-normal lg:text-lg lg:max-w-[75%]">
            <p>
              Next SaaS Stripe Starter is{" "}
              <b className="tracking-wide">Open Source Boilerplate</b>.
            </p>
            <p>
              Built on the{" "}
              <span className="underline underline-offset-5">Taxonomy</span> app
              by shadcn, it integrates Next.js 14, Prisma, Neon, Auth.js v5,
              Resend, React Email, Shadcn/ui, and Stripe.
            </p>
            <p>
              With Next SaaS Stripe Starter, you get a solid foundation for your
              SaaS journey.
            </p>
            <p>
              This documentation is your go-to resource for configuring and
              using the starter effectively.
            </p>
            <p>Let's get started and happy coding!</p>
            <hr className="border-neutral-800 mt-10" />
            <button className="border border-neutral-700 w-fit flex items-center hover:bg-neutral-900  px-3 tracking-wide py-2 rounded !text-sm font-semibold ml-auto">
              Installation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-2 size-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
