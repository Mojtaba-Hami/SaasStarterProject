import Icon from "@/components/ui/Icon";
import { SomeIcon } from "@/icons";
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
            <svg
              className='fill-white w-8'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='nextjs'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 15 15'>
              <path d='m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z'></path>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-up-right size-4'>
              <path d='M7 7h10v10'></path>
              <path d='M7 17 17 7'></path>
            </svg>
          </button>
        </div>

        {/* Card 2: Google */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <svg
              aria-hidden='true'
              focusable='false'
              className='fill-white w-8'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'>
              <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-up-right size-4'>
              <path d='M7 7h10v10'></path>
              <path d='M7 17 17 7'></path>
            </svg>
          </button>
        </div>

        {/* Card 3: Github */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <svg
              className='w-8'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='github'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'>
              <path
                fill='currentColor'
                d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-up-right size-4'>
              <path d='M7 7h10v10'></path>
              <path d='M7 17 17 7'></path>
            </svg>
          </button>
        </div>

        {/* Card 4: Laptop */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <svg
              className='w-8 lucide lucide-laptop'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16'></path>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-up-right size-4'>
              <path d='M7 7h10v10'></path>
              <path d='M7 17 17 7'></path>
            </svg>
          </button>
        </div>

        {/* Card 5: User */}
        <div className='relative group overflow-hidden border border-neutral-800 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <svg
              className='w-8 lucide lucide-user'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-arrow-up-right size-4'>
              <path d='M7 7h10v10'></path>
              <path d='M7 17 17 7'></path>
            </svg>
          </button>
        </div>

        {/* Card 6: Copy */}
        <div className='relative group overflow-hidden border border-neutral-800 hover:bg-neutral-900 flex flex-col gap-6 h-fit p-6 rounded-2xl'>
          <div className='absolute inset-0 -z-10 h-52 w-full bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0))] group-hover:bg-[radial-gradient(circle_farthest-side_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0))] group-hover:h-full transition-all duration-500'></div>
          <div className='p-2 rounded-2xl border border-neutral-800 w-fit'>
            <svg
              className='w-8'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <rect width='14' height='14' x='8' y='8' rx='2' ry='2'></rect>
              <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'></path>
            </svg>
          </div>
          <p className='text-neutral-400 text-[17px]'>
            Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit,
            sapiente.
          </p>
          <hr className='border-neutral-800' />
          <button className='flex gap-2 items-center bg-neutral-800 hover:bg-neutral-900 w-fit py-2 px-5 rounded-xl'>
            Visit the site
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right size-4"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg> */}
            <Icon name={SomeIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
