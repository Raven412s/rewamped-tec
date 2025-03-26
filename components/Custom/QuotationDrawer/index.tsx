"use client"
import QuotationForm from "@/components/Forms/QuotationForm"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { useState } from "react";

  export function QuotationDrawer({
    triggerText,
  }: {
    triggerText?: string;
  }) {
const [open, setOpen] = useState(false)

    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-gold hover:bg-gold/90">
          {triggerText || "Get your quotation"}
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogContent>
               {/* MODAL BOX */}
               <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl hide-scrollbar">
                    <QuotationForm />
                </div>
          </AlertDialogContent>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
