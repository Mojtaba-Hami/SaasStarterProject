import Icon from "@/components/ui/Icon";
import DuplicateSvg from "@/icons/duplicate.svg";
import GithubSvg from "@/icons/github.svg";
import GoogleSvg from "@/icons/google.svg";
import LaptopSvg from "@/icons/laptop.svg";
import Nsvg from "@/icons/n.svg";
import TopRightSvg from "@/icons/topright.svg";
import UserSvg from "@/icons/user.svg";
import React from "react";

export default function FeaturesSection() {
  return (
    <div className='flex flex-col items-center gap-5 mt-20'>
      <div className='flex gap-5 items-center flex-col'>
        <h5 className='bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent text-lg font-semibold'>
          Features
        </h5>
        <h1 className='text-3xl font-bold'>Discover all features</h1>
        <h3 className='text-lg font-light'>
          Harum quae dolore inventore repudiandae? orrupti aut temporibus
          ariatur.
        </h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] mx-auto'>
        {/* Card 1: Next.js */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <Nsvg />
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <TopRightSvg />
          </button>
        </div>

        {/* Card 2: Google */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <GoogleSvg/>
            
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
           <TopRightSvg />
          </button>
        </div>

        {/* Card 3: Github */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <GithubSvg className="size-8" />
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <TopRightSvg />
          </button>
        </div>

        {/* Card 4: Laptop */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <LaptopSvg className="stroke-white size-8" />
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
          <TopRightSvg />
          </button>
        </div>

        {/* Card 5: User */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <UserSvg />
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <TopRightSvg />
          </button>
        </div>

        {/* Card 6: Copy */}
        <div className='relative group overflow-hidden border border-neutral-800 hover:bg-neutral-900 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <DuplicateSvg />
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
           <TopRightSvg />
          </button>
        </div>
      </div>
    </div>
  );
}
