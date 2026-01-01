import LaptopSvg from "@/icons/laptop.svg";
import SearchSvg from "@/icons/search.svg";
import SettingSvg from "@/icons/setting.svg";
import Image from "next/image";
import React from "react";

export default function UnderOptions() {
  return (
    <div className="flex gap-8 lg:flex-row flex-col-reverse  ">
      <div className="w-[95%] mx-auto lg:w-[50%]">
        <Image
        alt="image"
          src="/img/work-from-home.webp"
          className="w-full h-[350px] rounded-2xl"
          width={100}
          height={100}
        />
      </div>
      <div className="w-[95%] mx-auto lg:w-[50%] flex flex-col gap-5">
        <h1 className="text-4xl font-bold ">Empower your projects</h1>
        <p className="fontlight">
          Unlock the full potential of your projects with our open-source SaaS
          platform. Collaborate seamlessly, innovate effortlessly, and scale
          limitlessly.
        </p>
        <div className="flex gap-5">
          <div>
           <LaptopSvg className="stroke-purple-600" />
          </div>
          <div>
            <h1>Collaborative</h1>
            <p className="fontlight">
              Work together with your team members in real-time.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <SettingSvg />
          </div>
          <div>
            <h1>Collaborative</h1>
            <p className="fontlight">
              Work together with your team members in real-time.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <SearchSvg />
          </div>
          <div>
            <h1>Collaborative</h1>
            <p className="fontlight">
              Work together with your team members in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
