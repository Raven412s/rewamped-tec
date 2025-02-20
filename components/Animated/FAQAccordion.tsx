"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <div className="p-6  rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>How often should elevators be serviced?</AccordionTrigger>
          <AccordionContent>
            Elevators should be serviced at least once a month to ensure safety and smooth operation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>What safety features are included in modern elevators?</AccordionTrigger>
          <AccordionContent>
            Modern elevators include emergency brakes, backup power, intercom systems, and overload sensors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>How long does elevator installation take?</AccordionTrigger>
          <AccordionContent>
            Depending on the type and building structure, installation can take anywhere from 2 weeks to 2 months.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>What should I do if I get stuck in an elevator?</AccordionTrigger>
          <AccordionContent>
            Stay calm, use the emergency button to contact support, and wait for assistance—never attempt to force doors open.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
