import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { FaQuestionCircle } from "react-icons/fa";
import FAQAccordion from "../Animated/FAQAccordion";
const FAQModal = () => {
  return (
<Dialog>
<DialogTrigger asChild>
<span className="flex gap-2 flex-row items-center justify-center sm:justify-start text-sm sm:text-base">
    <FaQuestionCircle /> FAQ's
    </span>
</DialogTrigger>
<DialogContent className="sm:max-w-[625px]">
  <DialogHeader>
    <DialogTitle>Frequently Asked Questions</DialogTitle>
  </DialogHeader>
  <div className="flex items-center justify-center w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-white dark:bg-neutral-950 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
  <FAQAccordion />
  </div>

</DialogContent>
</Dialog>
  );
};

export default FAQModal;
