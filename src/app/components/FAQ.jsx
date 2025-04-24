import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const FAQ = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      <div className="mt-28 mb-28 section-content relative flex flex-col justify-between gap-8">
        <div className="flex flex-col  text-center w-full items-center mb-5">
          <h2 className="mt-1 home bg-gradient-to-r from-[#7ED957] to-[#C9E265] font-bold text-transparent bg-clip-text text-[26px] sm:text-[40px]">
            <div className={bricolageGrotesque.className}>
              Frequently Asked Questions
            </div>
          </h2>
          <p className="max-w-[560px] leading-6 text-wrap text-center mt-4">
            We've compiled answers to common questions to help you get started
            quickly.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is everything local? How does Clova handle privacy?
              </AccordionTrigger>
              <AccordionContent>
                Your privacy and data security are our top priorities. All
                processing is done locally on your machine, ensuring your
                footage never leaves your computer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does Clova organize my footage?
              </AccordionTrigger>
              <AccordionContent>
                Clova uses advanced AI algorithms to automatically analyze and
                categorize your footage based on content, faces, actions, and
                dialogue. This creates an organized structure that makes finding
                specific clips quick and easy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I use Clova with my current video editor?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Clova is designed to work seamlessly with popular video
                editing software including Final Cut Pro, Adobe Premiere Pro,
                and DaVinci Resolve. Your organized footage can be directly
                imported into your preferred editor.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How much footage can Clova handle?
              </AccordionTrigger>
              <AccordionContent>
                Clova is built to handle large amounts of footage efficiently.
                Whether you're working with hours of interview footage or
                multiple camera angles, Clova can process and organize it all.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
