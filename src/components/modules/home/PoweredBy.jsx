import NeonSvg from "@/icons/neon.svg";
import NextSvg from "@/icons/next.svg";
import PrismaSvg from "@/icons/prisma.svg";
import ShadcnSvg from "@/icons/shadcn.svg";
import StripSvg from "@/icons/stripe.svg";
import VercelSvg from "@/icons/vercel.svg";
import Authjs from "@/icons/authjs.svg";
import React from "react";

export default function PoweredBySection() {
  return (
    <div className="mt-20 fontlight font-semibold flex flex-col items-center gap-10">
      <h1 className="">Powered by</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-10 !overflow-hidden ">
        <NextSvg className="w-1/2 flex h-full mx-auto" />

        <VercelSvg />

        <PrismaSvg />

       <NeonSvg />

        <div
          className="fontlight flex justify-center items-center gap-2 font-bold text-3xl
        hover:!text-white fill-[#808080] hover:fill-white">
          <Authjs/>
          Auth.js
        </div>

        <div className="fontlight justify-center flex items-center gap-2 font-bold text-3xl hover:!text-white  ">
          Resend
        </div>

        <div
          className="fontlight flex justify-center items-center gap-2 font-bold text-2xl
         hover:!text-white fill-[#808080] hover:fill-white"
        >
          <ShadcnSvg />
          Shadcn/ui
        </div>

       <StripSvg />
      </div>
    </div>
  );
}
