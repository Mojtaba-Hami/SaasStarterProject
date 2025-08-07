"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const menuItems = [
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/documentation", label: "Documentation" },
    { href: "/", label: "Login", mobileOnly: true },
    { href: "/", label: "Sign Up", mobileOnly: true },
  ];

  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathName = usePathname();
  return (
    <div
      className='flex justify-center fixed top-0 w-[100%] bg-black/30 !backdrop-blur-lg border-b
     border-neutral-800 z-999  '>
      <div className='text-white !py-3 flex justify-between items-center px-5 lg:px-0 w-full lg:w-[75%] '>
        <div className='flex gap-10 items-center'>
          <Link href='/'>
            <div className='flex gap-2 text-xl font-medium items-center'>
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
                className='lucide lucide-puzzle'>
                <path d='M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z'></path>
              </svg>
              <h1>SaaS Starter</h1>
            </div>
          </Link>
          <ul className='md:flex hidden items-center gap-8 font-semibold text-gray-400 '>
            {menuItems
              .filter((item) => !item.mobileOnly)
              .map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`hover:text-gray-300 ${
                    pathName === item.href ? "text-white" : ""
                  }`}>
                  {item.label}
                </Link>
              ))}
          </ul>
        </div>

        <div>
          <button
            className='hidden md:flex items-center bg-gray-100 hover:bg-gray-200 gap-1  text-black px-6 py-1.5 rounded-full
        '>
            Sign in
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
              className='lucide lucide-arrow-right size-4'>
              <path d='M5 12h14'></path>
              <path d='m12 5 7 7-7 7'></path>
            </svg>
          </button>

          <div>
            {isMenuShown ? (
              <button
                className='text-gray-400 p-2 hover:bg-neutral-800 rounded-full'
                onClick={() => setIsMenuShown(false)}>
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
                  className='lucide lucide-x size-5 text-muted-foreground'>
                  <path d='M18 6 6 18'></path>
                  <path d='m6 6 12 12'></path>
                </svg>
              </button>
            ) : (
              <button
                className='md:hidden text-gray-400 p-2 hover:bg-neutral-800 rounded-full'
                onClick={() => setIsMenuShown(true)}>
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
                  className='lucide lucide-menu size-5 text-muted-foreground'>
                  <line x1='4' x2='20' y1='12' y2='12'></line>
                  <line x1='4' x2='20' y1='6' y2='6'></line>
                  <line x1='4' x2='20' y1='18' y2='18'></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {pathName === "/guides" && (
        <hr className='border-neutral-700 !w-screen mx-auto absolute    !left-0' />
      )}
      {isMenuShown && (
        <div className='bg-black z-20 w-full h-screen fixed '>
          <ul className='md:hidden flex flex-col px-5 py-5 gap-3 font-semibold text-white '>
            {menuItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setIsMenuShown(false)}
                className={`hover:text-gray-300 border-b-[0.1px] border-gray-500 opacity-60 pb-3 ${
                  pathName === item.href ? "text-white" : ""
                }`}>
                {item.label}
              </Link>
            ))}
          </ul>

          <div className=' flex gap-4 items-center justify-end px-7 my-7 '>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='github'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
              class='size-6'>
              <path
                fill='currentColor'
                d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-moon  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'>
              <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
