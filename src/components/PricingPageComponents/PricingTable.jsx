"use client"

import React, { useState } from 'react'

export default function Pricingtable() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleIconClick = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className='text-white mt-20'>
      <div className="flex gap-5 w-[90%] lg:w-full mx-auto items-center flex-col mb-15">
        <h5 className="bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent text-lg font-semibold">
          Plans
        </h5>
        <h1 className="text-4xl font-bold">Compare Our Plans</h1>
        <h3 className="text-lg fontlight">
          Find the perfect plan tailored for your business needs!
        </h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-neutral-900 border border-neutral-800 text-2xl">
              <th className="px-10 py-5 w-[30%] font-extrabold sticky left-0 top-0 z-20 lg:bg-transparent bg-neutral-900"></th>
              <th className="px-10 py-5 font-extrabold sticky top-0 z-10 lg:bg-transparent bg-neutral-900">Starter</th>
              <th className="px-10 py-5 font-extrabold sticky top-0 z-10 lg:bg-transparent bg-neutral-900">Pro</th>
              <th className="px-10 py-5 font-extrabold sticky top-0 z-10 lg:bg-transparent bg-neutral-900">Business</th>
              <th className="px-10 py-5 font-extrabold sticky top-0 z-10 lg:bg-transparent bg-neutral-900">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr className='p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='p-5 border border-neutral-800 py-5 flex w-full items-center sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Access to Analytics</span>
                <svg className='relative stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Custom</td>
            </tr>
            <tr>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Custom Branding</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 text-neutral-400'>500/mo</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>1,500/mo</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Unlimited</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Priority Support</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Email</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Email & Chat</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>24/7 Support</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Advanced Reporting</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Custom</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Dedicated Manager</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">API Access</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Limited</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Standard</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Enhanced</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Full</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Monthly Webinars</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check mx-auto size-[22px]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Custom</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Custom Integrations</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>available</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>available</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Roles and Permissions</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Basic</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>advanced</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>advanced</td>
            </tr>
            <tr className='w-[20%] p-5 text-center border border-neutral-800 py-5'>
              {/* Corrected TD */}
              <td className='w-full flex items-center p-5 text-center border border-neutral-800 py-5 sticky left-0 z-10 lg:bg-transparent bg-neutral-900'>
                <span className="mr-auto">Onboarding Assistance</span>
                <svg className='stroke-neutral-500 shrink-0' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>—</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Self-service</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Assisted</td>
              <td className='w-[20%] p-5 text-center border border-neutral-800 py-5 fontlight'>Full Service</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}