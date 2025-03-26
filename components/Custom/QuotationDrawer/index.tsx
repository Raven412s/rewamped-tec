"use client";
import { CButton } from "@/components/Animated/CButton";
import QuotationForm from "@/components/Forms/QuotationForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

export default function QuotationDrawer({
  triggerText,
}: {
  triggerText?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gold hover:bg-gold/90"
        >
          {triggerText || "Get your quotation"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 border-none bg-transparent shadow-none hide-scrollbar" >
        <CButton
          duration={Math.floor(Math.random() * 5000) + 10000}
          borderRadius="1.75rem"
          style={{
            backgroundColor: "#131415",
            borderRadius: "calc(1.75rem * 0.96)",
          }}
          className="flex flex-col items-center justify-start p-6 max-h-[90vh] overflow-y-auto relative w-full hide-scrollbar" >
          <DialogTitle className="text-lg text-center font-semibold mb-4">
            Construction Inquiry
          </DialogTitle>
          <QuotationForm />
        </CButton>
      </DialogContent>
    </Dialog>
  );
}
