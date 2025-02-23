"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-sm sm:text-base">
            How often should elevators be serviced?
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm">
            Elevators should be serviced at least once a month to ensure safety and smooth operation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger className="text-sm sm:text-base">
            What safety features are included in modern elevators?
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm">
            Modern elevators include emergency brakes, backup power, intercom systems, and overload sensors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger className="text-sm sm:text-base">
            How long does elevator installation take?
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm">
            Depending on the type and building structure, installation can take anywhere from 2 weeks to 2 months.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger className="text-sm sm:text-base">
            What should I do if I get stuck in an elevator?
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm">
            Stay calm, use the emergency button to contact support, and wait for assistance—never attempt to force doors open.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
