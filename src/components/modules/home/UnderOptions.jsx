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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path
                d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
                className="stroke-purple-600 fill-transparent"
              ></path>
            </svg>
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
              className="stroke-purple-600"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-purple-600 fill-transparent"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
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
