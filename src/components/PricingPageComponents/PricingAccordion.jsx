import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPageAccordion() {
  return (
    <div className="text-white mt-20">
      <div className="flex gap-5 w-[90%] lg:w-full  mx-auto  items-center flex-col mb-15">
        <h5 className="bg-gradient-to-r from-[#6366f1] from-60% to-[#a855f7cc] bg-clip-text text-transparent text-lg font-semibold">
          Testimonials
        </h5>
        <h1 className="text-4xl  font-bold">What our clients are sharing.</h1>
        <h3 className="text-lg fontlight">
          Discover the glowing feedback from our delighted customers worldwide.
        </h3>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full lg:w-[80%] mx-auto text-white mt-20 "
      >
        <AccordionItem value="item-1" className="border-neutral-800">
          <AccordionTrigger className="text-lg">
            What is the cost of the free plan?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance fontlight  font-semibold">
            <p>
              Our free plan is completely free, with no monthly or annual
              charges. It's a great way to get started and explore our basic
              features.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-neutral-800">
          <AccordionTrigger className="text-lg">
            How much does the Basic Monthly plan cost?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance fontlight  font-semibold">
            <p>
              The Basic Monthly plan is priced at $15 per month. It provides
              access to our core features and is billed on a monthly basis.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-neutral-800">
          <AccordionTrigger className="text-lg">
            What is the price of the Pro Monthly plan?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance fontlight  font-semibold">
            <p>
              The Pro Monthly plan is available for $25 per month. It offers
              advanced features and is billed on a monthly basis for added
              flexibility.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-neutral-800">
          <AccordionTrigger className="text-lg">
            Do you offer any annual subscription plans?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance fontlight  font-semibold">
            <p>
              Yes, we offer annual subscription plans for even more savings. The
              Basic Annual plan is $144 per year, and the Pro Annual plan is
              $300 per year.{" "}
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg  ">
            {" "}
            Is there a trial period for the paid plans?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4  fontlight  font-semibold">
            <p>
              We offer a 14-day free trial for both the Pro Monthly and Pro
              Annual plans. It's a great way to experience all the features
              before committing to a paid subscription.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
