"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';




export default function InPageNavigation({data}) {

    const sampleData = [
  {
    id: 'section-1',
    title: data.title,
    body: data.body,
  },
  {
    id: 'section-2',
    title: data.title,
    body: data.body,
  },
  {
    id: 'section-3',
    title: data.title,
    body: data.body,
  },
  {
    id: 'section-4',
    title: data.title,
    body: data.body,
  },{
    id: 'section-5',
    title: data.title,
    body: data.body,
  },
];

   const [activeId, setActiveId] = useState('');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { 
        rootMargin: "0px 0px -70% 0px"
    });

    const elements = sampleData.map(item => document.getElementById(item.id));
    elements.forEach(el => {
      if (el) observer.current.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.current.unobserve(el);
      });
    };
  }, []); 


  return (
    <div className='  mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 p-4'>
      <div className='md:col-span-3 flex flex-col gap-15 text-justify border-x border-neutral-800 rounded-t-2xl'>
        
        <Image className=' w-full lg:w-[100%]   h-[450px] rounded-2xl' src={data.coverImage} width={500} height={400} alt={data.title} />

        {sampleData.map((item) => (
            
          <div key={item.id} id={item.id} className='flex flex-col gap-2 border-x px-10 border-neutral-800'>
            <h2 className=' font-bold'>{item.title}</h2>
            <p>{item.body}</p>
            <p>{item.body}</p> 
          </div>
        ))}
      </div>

      <div className='md:col-span-1 '>
        <div className='sticky top-20 flex flex-col gap-3'>
          {/* <h3 className="font-bold text-lg mb-2">  </h3> */}
          {sampleData.map((item) => (
             <a 
              key={item.id} 
              href={`#${item.id}`}
              className={`transition-colors duration-300 whitespace-nowrap ${
                activeId === item.id 
                ? 'text-white font-bold' 
                : 'text-neutral-400 hover:text-neutral-200' 
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}