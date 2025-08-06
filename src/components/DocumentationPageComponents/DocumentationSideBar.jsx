import Link from 'next/link'
import React from 'react'

export default function Documentationsidebar() {
  return (
    <div className='text-white'>
       <div className="text-white  gap-2 py-5 flex flex-col">
          <h1 className="text-lg font-semibold">Getting Started</h1>
          <Link href="/documentation " className=" text-blue-400  hover:underline">Introduction</Link>
          <Link href="/documentation " className=" text-neutral-400400 text-neutral-300 hover:underline">Installation</Link>
        </div>

        <div className="text-white  gap-2 py-5 flex flex-col">
          <h1 className="text-lg font-semibold">Couration</h1>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Authentification</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Blog</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Components</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Config files</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Database</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Email</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Layouts</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Markdown files</Link>
          <Link href="/documentation " className=" text-neutral-400  hover:underline">Subscriptions</Link>
        </div>
    </div>
  )
}
