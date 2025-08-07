import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
  return (
    <div className='mt-30'>
      <div className="flex gap-5 w-[90%] lg:w-full  mx-auto  items-center flex-col mb-15">
        <h5 className="bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent text-lg font-semibold">
          Testimonials
        </h5>
        <h1 className="text-4xl  font-bold">What our clients are sharing.</h1>
        <h3 className="text-lg fontlight">
          Discover the glowing feedback from our delighted customers worldwide.
        </h3>
      </div>
<div className="md:columns-2 lg:columns-3 gap-5 space-y-5  w-[95%] lg:w-full mx-auto">


    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof1.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col '>
                    <span className='font-semibold -mb-1 '>John Doe</span>
                    <span className='fontlight'>Full Stack Developer</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                The next-saas-stripe-starter repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend next-saas-stripe-starter to any developer.
            </q>
        </div>
    </div>


    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof5.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col '>
                    <span className='font-semibold -mb-1 '>Alice Smith</span>
                    <span className='fontlight'>UI/UX Designer</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.
            </q>
        </div>
    </div>

    
    
    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof2.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col '>
                    <span className='font-semibold -mb-1 '>David Johnson</span>
                    <span className='fontlight'>DevOps Engineer</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time.
            </q>
        </div>
    </div>


    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof3.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col '>
                    <span className='font-semibold -mb-1 '>Michael Wilson</span>
                    <span className='fontlight'>Project Manager</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!
            </q>
        </div>
    </div>

    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof7.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col '>
                    <span className='font-semibold -mb-1 '>Sophia Garcia</span>
                    <span className='fontlight'>Data Analyst</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!
            </q>
        </div>
    </div>


    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-4 '>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof4.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col gap-3'>
                    <span className='font-semibold -mb-3 '>Emily Brown</span>
                    <span className='fontlight'>DevOps Engineer</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.
            </q>
        </div>
    </div>

    <div className="bg-neutral-900 border border-neutral-700 p-5 rounded-2xl break-inside-avoid">
        <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
                <Image className='rounded-full' src="/img/prof6.png" width={40} height={40} alt='profile' />
                <div className='flex flex-col gap-3 '>
                    <span className='font-semibold -mb-3 '>Jason Stan</span>
                    <span className='fontlight'>Web Designer</span>
                </div>
            </div>
            <q className='text-neutral-400'>
                Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.
            </q>
        </div>
    </div>
   

</div>
    </div>
  )
}
