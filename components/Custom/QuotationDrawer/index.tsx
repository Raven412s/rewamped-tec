"use client";
import { CButton } from "@/components/Animated/CButton";
import QuotationForm from "@/components/Forms/QuotationForm";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer";
import { useState } from "react";


export default function QuotationDrawer({
  triggerText,
}: {
  triggerText?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="bg-gold hover:bg-gold/90">
            {triggerText || "Get your quotation"}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-3 py-1 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm  min-h-screen">
          <div className="flex justify-center items-center w-full mt-10 sm:mt-0">
            <CButton
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                backgroundColor: "#131415",
                borderRadius: "calc(1.75rem * 0.96)",
              }}
              className="flex flex-col items-senter justify-start p-6 max-h-screen overflow-y-auto"
            >
              <h4 className="text-lg text-center font-semibold">Construction Inquiry</h4>
                <QuotationForm/>
            </CButton>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
