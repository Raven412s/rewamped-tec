"use client";
import { CButton } from "@/components/Animated/CButton";
import QuotationForm from "@/components/Forms/QuotationForm";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { useState } from "react";

export default function QuotationDrawer({
  triggerText,
}: {
  triggerText?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-gold hover:bg-gold/90"
        >
          {triggerText || "Get your quotation"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3 py-4 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm min-h-screen">
        <div className="w-full flex justify-between items-center top-6 px-14   z-40 absolute">
          <DialogTitle className="text-left w-full sr-only">Quotation Form</DialogTitle>
        </div>
        <div className="flex justify-center items-center w-full mt-6 sm:mt-0">
          <CButton
            duration={Math.floor(Math.random() * 5000) + 10000}
            borderRadius="1.75rem"
            style={{
              backgroundColor: "#131415",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex flex-col items-center justify-start p-6 max-h-screen overflow-y-auto"
          >
            <h4 className="text-lg text-center font-semibold">
              Construction Inquiry
            </h4>
            <DrawerClose asChild className="absolute top-4 right-4 ">
            <Button variant="ghost" size={"icon"} className=""><X  className="size-4"/></Button>
          </DrawerClose>
            <QuotationForm />
          </CButton>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
