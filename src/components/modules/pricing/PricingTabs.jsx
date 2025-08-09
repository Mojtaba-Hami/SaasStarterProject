"use client";
import React, { useState } from "react";

export default function PricingTab() {
  const [isACtiveTab, setIsActiveTab] = useState(1);
  return (
    <div className="text-white ">
      <div className="flex px-1 py-1 rounded-full gap-1 border border-neutral-700 w-fit mx-auto  ">
        <button
          onClick={() => setIsActiveTab(1)}
          className={`${
            isACtiveTab === 1 ? "bg-white text-black" : "fontlight"
          }  px-5 py-1  rounded-full`}
        >
          Montly
        </button>
        <button
          onClick={() => setIsActiveTab(2)}
          className={`${
            isACtiveTab === 2 ? "bg-white text-black" : "fontlight"
          }  px-5 py-1  rounded-full`}
        >
          Yearly(-20%)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
        <div className=" h-full flex flex-col rounded-3xl border border-neutral-700  overflow-hidden">
          <div className="flex flex-col gap-3 bg-neutral-900 px-5 py-7 h-[165px]">
            <span className="fontlight font-semibold">STARTER</span>
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-3xl">0$</span>
              <span className="text-md font-semibold fontlight flex mt-3">
                / month
              </span>
            </div>
          </div>
          <div className="mt-5 mx-5 flex flex-col gap-3">
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Up to 100 monthly posts
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Basic analytics and reporting
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Access to standard templates
            </p>
            <p className="font-semibold flex  gap-2 fontlight">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              NO Priority customer support
            </p>

            <p className="font-semibold flex  gap-2 fontlight">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              Limited customer support
            </p>

            <p className="font-semibold flex fontlight gap-2">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              No custom branding
            </p>

            <p className="font-semibold flex fontlight gap-2">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              Limited access to business resources.
            </p>
          </div>
          <button className="w-[80%] py-2 px-3 rounded-full  text-white border border-neutral-700  mt-15 font-semibold mb-5 flex justify-center mx-auto">
            Sign in
          </button>
        </div>
        <div className=" h-full flex flex-col rounded-3xl border border-neutral-700  overflow-hidden">
          <div className="flex flex-col gap-3 bg-neutral-900 px-5 py-7">
            <span className="fontlight font-semibold">STARTER</span>
            <div className="flex gap-2 items-center">
              {isACtiveTab === 1 ? (
                <span className="font-semibold text-3xl">$12</span>
              ) : (
                <>
                  {" "}
                  <span className="font-semibold text-3xl fontlight line-through">
                    $15
                  </span>
                  <span className="font-semibold text-3xl">$12</span>
                </>
              )}

              <span className="text-md font-semibold fontlight flex mt-3">
                / month
              </span>
            </div>
            <span className="font-semibold fontlight ">
              {isACtiveTab === 1
                ? " when charged monthly"
                : "$144 will be charged when annual"}
            </span>
          </div>
          <div className="mt-5 mx-5 flex flex-col gap-3">
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Up to 500 monthly posts
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Advanced analytics and reporting
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Access to business templates
            </p>
            <p className="font-semibold flex  gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Priority customer support
            </p>

            <p className="font-semibold flex  gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Exclusive webinars and training.
            </p>

            <p className="font-semibold flex fontlight gap-2">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              No custom branding
            </p>

            <p className="font-semibold flex fontlight gap-2">
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
                className="lucide lucide-x  size-5 shrink-0"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              Limited access to business resources.
            </p>
          </div>
          <button className="w-[80%] py-2 px-3 rounded-full bg-white text-black mt-15 font-semibold mb-5 flex justify-center mx-auto">
            Sign in
          </button>
        </div>

        <div className=" lg:w-full h-full flex flex-col items-stretch justify-between  pb-5 rounded-3xl border border-neutral-700  overflow-hidden">
          <div className="flex flex-col  gap-3 bg-neutral-900  px-5 py-7">
            <span className="fontlight font-semibold">STARTER</span>
            <div className="flex gap-2 items-center">
              {isACtiveTab === 1 ? (
                <span className="font-semibold text-3xl">$25</span>
              ) : (
                <>
                  <span className="font-semibold text-3xl fontlight line-through">
                    $30
                  </span>
                  <span className="font-semibold text-3xl">$25</span>
                </>
              )}
              <span className="text-md font-semibold fontlight flex mt-3">
                / month
              </span>
            </div>
            <span className="font-semibold fontlight ">
              {isACtiveTab === 1
                ? "when charged monthly"
                : "sdfs$144 will be charged when annual"}
            </span>
          </div>
          <div className="mt-5 mx-5 flex flex-col gap-3">
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Unlimited posts
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Real-time analytics and reporting
            </p>
            <p className="font-semibold flex gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Access to all templates, including custom branding
            </p>
            <p className="font-semibold flex  gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              24/7 business customer support
            </p>

            <p className="font-semibold flex  gap-2">
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
                className="lucide lucide-check size-5 shrink-0 text-purple-500"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Personalized onboarding and account management.
            </p>
          </div>
          <button className="w-[80%]   py-2 px-3 rounded-full  text-white border border-neutral-700 mt-15 font-semibold  flex justify-center mx-auto">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
