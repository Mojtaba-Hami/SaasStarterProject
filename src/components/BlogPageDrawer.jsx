"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react'; 

const navLinks = [
  { href: '/blog', label: 'All' },
  { href: '/blog/category/news', label: 'News' },
  { href: '/blog/category/education', label: 'Education' },
  { href: '/guides', label: 'Guides' },
];

export default function MobileMenuDrawer() {
  const pathName = usePathname();

  return (
    <div className='lg:hidden'>
        <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden  w-full  flex justify-start px-2  border border-neutral-800"> 
          <Menu className="h-6 w-6" />
          <span className='font-normal tracking-wide'>Categories</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-md p-4">
          
          <ul className='flex flex-col gap-2 p-4'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <DrawerClose asChild>
                  <Link
                    className={`flex justify-between items-center px-4 py-2 rounded-md text-md  transition-colors text-white`}
                    href={link.href}
                  >
                    {link.label}
                    {
                        pathName === link.href ? (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check size-4"><path d="M20 6 9 17l-5-5"></path></svg>                        ) : null
                    }
                  </Link>
                </DrawerClose>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
    </div>
  );
}