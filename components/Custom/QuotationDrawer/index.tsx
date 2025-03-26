"use client";
import QuotationForm from "@/components/Forms/QuotationForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export function QuotationDrawer({
  triggerText,
}: {
  triggerText?: string;
}) {
  const [open, setOpen] = useState(false);
  // Lock scroll when modal is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "relative"; // helps in preventing scroll jumps
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-gold hover:bg-gold/90">
          {triggerText || "Get your quotation"}
        </Button>
      </DialogTrigger>

      <DialogContent
  className="max-w-4xl w-full max-h-screen overflow-hidden rounded-2xl touch-pan-y"
>
  <DialogHeader>
    <DialogTitle className="sr-only">Get Your Quotation</DialogTitle>
  </DialogHeader>

  {/* Make scrollable wrapper here */}
  <div className="overflow-y-auto max-h-[90vh] pr-2">
    <QuotationForm onSuccess={() => setOpen(false)} />
  </div>
</DialogContent>

    </Dialog>
  );
}
