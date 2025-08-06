import PricingPageAccordion from '@/components/PricingPageComponents/PricingAccordion'
import Pricingtable from '@/components/PricingPageComponents/PricingTable'
import PricingTab from '@/components/PricingPageComponents/PricingTabs'
import React from 'react'

export default function PricingPage() {
  return (
    <div className='mt-10 lg:w-full w-[95%] mx-auto'>
       <div className="flex gap-5 w-[90%] lg:w-full  mx-auto  items-center flex-col mb-15">
        <h5 className="bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent text-lg font-semibold">
          Pricing
        </h5>
        <h1 className="text-4xl text-white font-bold">Start at full speed !</h1>
      </div>

      <PricingTab />
      <Pricingtable/>
      <PricingPageAccordion/>
    </div>
  )
}
