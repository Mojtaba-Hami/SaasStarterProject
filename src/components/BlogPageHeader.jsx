"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BlogPageDrawer from './BlogPageDrawer'


export default function BlogPageHeader({param}) {
    const pathName = usePathname()
    console.log(pathName);
    
  return (
         <div className='flex flex-col gap-5 '>
         <p className="text-4xl font-bold">
{
  pathName === '/blog'
    ? 'Blog'
    : pathName === '/blog/category/news' 
      ? 'News'
      : pathName === '/blog/category/education' 
        ? 'Education'
        : '' 
}         </p>
          <p className="fontlight text-xl">
            {
              pathName === '/blog'
                ? 'Latest news and updates from Next SaaS Starter.'
                : pathName === '/blog/category/news' 
                  ? 'Updates and announcements from Next SaaS Starter.'
                  : pathName === '/blog/category/education' 
                    ? 'Educational content about SaaS management.'
                    : ''
            }
        </p>    
      <ul className='lg:flex gap-5 border-b-2   border-neutral-800 mt-8 hidden '>
          <Link className={`px-4 pb-3  text-neutral-500 hover:text-white font-semibold ${pathName === '/blog' ? 'border-b-2 border-purple-400 text-white' : ''}`} href='/blog'>All</Link>
          <Link className={`px-4 pb-3   text-neutral-500 hover:text-white font-semibold ${pathName === '/blog/category/news' ? 'border-b-2 border-purple-400 text-white' : ''}`} href='/blog/category/news'>News</Link>
          <Link className={`px-4 pb-3  text-neutral-500 hover:text-white font-semibold ${pathName === '/blog/category/education' ? 'border-b-2 border-purple-400 text-white' : ''} `} href='/blog/category/education'>Education</Link>
          <Link className={`px-4 pb-3  text-neutral-500 hover:text-white font-semibold ${pathName === '/guides' ? 'border-b-2 border-purple-400 text-white' : ''} `} href='/guides'>Guides</Link>
        </ul>
        <BlogPageDrawer pathName={pathName} />
    </div>
    )
}
