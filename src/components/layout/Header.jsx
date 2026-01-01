import GithubSvg from "@/icons/github.svg";
import RightArrowSvg from "@/icons/rightarrow.svg";
import Xsvg from "@/icons/x.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-25  gap-8">
      <button className="flex gap-2 items-center border border-neutral-800 hover:bg-neutral-900 px-4 py-1 rounded-full">
        <span className="mr-3">🎉</span>
        <span> Next Auth Roles Template on </span>
       <Xsvg className="size-5" />
        
      </button>

      <div className="flex flex-col gap-5">
        <h2 className=" text-balance text-4xl font-bold  sm:text-5xl md:text-6xl lg:text-[66px] text-center">
          Kick off with a bang <br />
          with{" "}
          <span className="bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent">
            {" "}
            SaaS Starter
          </span>
        </h2>
        <p className="text-center fontlight max-w-2xl text-balance leading-normal  sm:text-xl sm:leading-8">
          Build your next project using Next.js 14, Prisma, Neon,
          <br /> Auth.js v5, Resend, React Email, Shadcn/ui, Stripe.
        </p>

        <div className="flex gap-5 items-center justify-center">
          <button className="flex gap-3 text-sm font-medium bg-white rounded-full text-black py-3 px-6 items-center">
            Go Pricing
            <RightArrowSvg  />
          </button>

          <button className="flex gap-3  border border-neutral-800 font-medium text-md rounded-full py-3 px-6 items-center">
            <GithubSvg className="size-5" />
            Star on Github
          </button>
        </div>
      </div>

      <div className="mt-10 w-[95%] lg:w-full sm:rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] p-4 shadow-inner">
        <Image
        alt="image"
          src="/img/headerimg.png"
          className="w-full h-full object-cover "
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
