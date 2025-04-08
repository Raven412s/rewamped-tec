"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "../ui/dialog";


const formSchema = z.object({
  firstName: z.string().min(3).max(30),
  lastName: z.string().min(3),
  phoneNumber: z.string().min(10).max(13),
  emailId: z.string().email(),
  location: z.string().min(3),
  floors: z.string(),
  otherFloors: z.string().optional(),
  message: z.string().optional(),
});

export default function QuotationForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useReactHookForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
    });

    // Formspree Hook
    const [state, handleSubmit] = useFormspree("mgvoddzr");

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
          const response = await fetch("https://formspree.io/f/mgvoddzr", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
          });

          const responseData = await response.json();

          onSuccess?.(); // Close the modal

          if (response.ok) {
            // 👇 Meta Pixel track call
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "Lead", {
                content_name: "Quotation Form",
                value: "Submitted",
              });
            }

            toast.success("Form submitted successfully! 🎉");

            form.reset({
              firstName: "",
              lastName: "",
              phoneNumber: "",
              emailId: "",
              location: "",
              floors: "",
              otherFloors: "",
              message: "",
            });
          } else {
            throw new Error(responseData?.error || "Form submission failed");
          }
        } catch (error) {
          console.error("Form submission error:", error);
          toast.error("Failed to submit the form. Please try again.");
        } finally {
          setIsOtherSelected(false);
          setIsSubmitting(false);
        }
      }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl><Input placeholder="" type="text" {...field} disabled={isSubmitting} /></FormControl>
                <FormDescription>Enter your first name here</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="col-span-6">
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl><Input placeholder="" type="text" {...field}  disabled={isSubmitting}/></FormControl>
                <FormDescription>Enter your last name here</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField control={form.control} name="phoneNumber" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input placeholder="" type="text" {...field} disabled={isSubmitting} /></FormControl>
                <FormDescription>Enter your phone number here</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="col-span-6">
            <FormField control={form.control} name="emailId" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input placeholder="" type="email" {...field} disabled={isSubmitting}/></FormControl>
                <FormDescription>Enter your email here</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField control={form.control} name="location" render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl><Input placeholder="" type="text" {...field} disabled={isSubmitting}/></FormControl>
                <FormDescription>Enter the location where you want the lift installed</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="col-span-6">
            <FormField control={form.control} name="floors" render={({ field }) => (
              <FormItem>
                <FormLabel>Floors</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setIsOtherSelected(value === "other");
                  }}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder="Floor count" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <SelectItem key={index} value={`G+${item}`}>{`G+${item}`}</SelectItem>
                    ))}
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Add the number of floors in your construction</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {isOtherSelected && (
          <div className="col-span-12">
            <FormField control={form.control} name="otherFloors" render={({ field }) => (
              <FormItem>
                <FormLabel>Specify Other Floors</FormLabel>
                <FormControl><Input placeholder="Enter custom floor count" type="text" {...field} disabled={isSubmitting}/></FormControl>
                <FormDescription>Specify the number of floors if selecting "Other"</FormDescription>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        )}

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl><Textarea placeholder="Enter your message..." className="resize-none" {...field} disabled={isSubmitting}/></FormControl>
            <FormDescription>Ask your query here.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />

        <div className="flex gap-10 items-center justify-start">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>

        <DialogClose asChild>
            <Button disabled={isSubmitting} variant={"destructive"} type="button" size={"lg"}>
            Cancel
            </Button>
        </DialogClose>
        </div>
      </form>
    </Form>
  );
}
