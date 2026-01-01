import CircleSvg from "@/icons/circle.svg";
import FasterthanlightSvg from "@/icons/fasterthanlight.svg";
import FingerprintSvg from "@/icons/fingerprint.svg";
import UnknownSvg from "@/icons/unknown.svg";
import Image from "next/image";
import ChartSvg from "@/icons/chart.svg";

export default function OptionsSection() {
  return (
    <div
      className="grid my-30 grid-cols-1 w-[90%] !mx-auto lg:w-full  lg:grid-cols-12 gap-5 
    "
    >
      <div className="p-5 border lg:col-span-4 col-span-6 border-neutral-700  flex flex-col justify-center gap-5 items-center relative rounded-2xl h-[330px]">
        <CircleSvg />
        <span className="text-5xl font-bold absolute top-[32%] bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent">
          100%
        </span>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[40px]">
          Customizable
        </h1>
      </div>

      <div className="p-5 border lg:col-span-4 col-span-6  border-neutral-700 h-[330px] rounded-2xl flex flex-col items-center justify-center">
        <div className="my-4 flex items-center border-2 p-2  rounded-full w-[142px] h-[142px] der border-[#2a2a2a] bg-[#0d0d0d]  shadow-inner">
         <FingerprintSvg />
        </div>
        <p className="text-lg font-semibold">Secure by default</p>
        <p className="text-center mt-2 fontlight font-medium">
          Provident fugit and vero voluptate. magnam magni doloribus dolores
          voluptates a sapiente nisi.
        </p>
      </div>

      <div className="p-5 border lg:col-span-4 col-span-6  gap-2   border-neutral-700 h-[330px] rounded-2xl flex flex-col items-center justify-center">
        <FasterthanlightSvg />
        <div>
          <p className="text-lg font-semibold text-center">Faster than light</p>
          <p className="text-center mt-2 fontlight font-medium">
            Provident fugit vero voluptate. magnam magni doloribus dolores
            voluptates inventore nisi.
          </p>
        </div>
      </div>

      <div
        className="p-5 border col-span-6 overflow-hidden gap-2 border-neutral-700  rounded-2xl 
      grid grid-cols-1 md:grid-cols-2"
      >
        <div className="flex flex-col justify-between">
          <div className="p-2 opacity-95 bg-neutral-900 border border-neutral-800 h-fit w-fit rounded-full">
            <div className="p-3 bg-neutral-800 border border-neutral-600 rounded-full h-fit">
             <UnknownSvg />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold ">Faster than light</p>
            <p className=" mt-2 fontlight font-medium">
              Provident fugit vero voluptate. Voluptates a sapiente inventore
              nisi.
            </p>
          </div>
        </div>

        <div className="relative -mb-10 -mr-10 mt-8 h-fit rounded-tl-xl border border-neutral-800 bg-neutral-900 pt-6 sm:ml-6 sm:mt-auto">
          <div className="absolute left-3 top-2 flex gap-1">
            <span className="block size-2 rounded-full border border-neutral-800"></span>
            <span className="block size-2 rounded-full border border-neutral-800"></span>
            <span className="block size-2 rounded-full border border-neutral-800"></span>
          </div>
          <ChartSvg/>
        </div>
      </div>

      <div className=" border col-span-6 overflow-hidden gap-2 border-neutral-700  rounded-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 flex flex-col gap-5 lg:gap-0 justify-between">
          <div className="p-2 opacity-95 bg-neutral-900 border border-neutral-800 h-fit w-fit rounded-full">
            <div className="p-3 bg-neutral-800 border border-neutral-600 rounded-full h-fit">
              <svg
                className="m-auto size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold ">Keep your loved ones safe</p>
            <p className=" mt-2 fontlight font-medium">
              Voluptate. magnam magni doloribus dolores voluptates a sapiente.
            </p>
          </div>
        </div>

        <div className="relative h-[250px]">
          <div className="flex items-center gap-2 absolute top-[25%]  right-[47%] lg:right-[60%]">
            <span className="bg-neutral-900 px-2 py-05 border border-neutral-700 rounded-lg">
              Glodie
            </span>
            <Image
            alt="image"
              src="/img/image.png"
              className="rounded-full"
              width={25}
              height={25}
            />
          </div>

          <div className="flex items-center gap-2 absolute top-[45%] right-[25%] lg:right-[30%] ">
            <Image
            alt="image"
              src="/img/2.png"
              className="rounded-full"
              width={25}
              height={25}
            />
            <span className="bg-neutral-900 px-2 py-05 border border-neutral-700 rounded-lg">
              M.Irung
            </span>
          </div>

          <div className="flex items-center gap-2 absolute top-[65%] right-[47%] lg:right-[60%] ">
            <span className="bg-neutral-900 px-2 py-05 border border-neutral-700 rounded-lg">
              B. Ng
            </span>
            <Image
            alt="image"
              src="/img/3.png"
              className="rounded-full"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
