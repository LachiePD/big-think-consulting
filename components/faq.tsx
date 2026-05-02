import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "What types of organisations do you work with?",
    answer:
      "We work with a broad range of organisations — from growth-stage businesses to large enterprises — across sectors including professional services, technology, retail, and financial services. What they share is ambition and a willingness to think differently.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on the scope of the work. A focused strategy project might run 6–10 weeks, while a deeper transformation engagement could span several months. We scope every project carefully and are transparent about timelines from the outset.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "Our consultants have deep experience across professional services, technology, financial services, retail, and healthcare. That said, our approach is built around rigorous thinking and disciplined methodology — capabilities that translate across sectors.",
  },
  {
    question: "How do you measure the success of an engagement?",
    answer:
      "We agree on clear outcomes and success metrics at the start of every engagement. Success for us means tangible impact — whether that’s market share gained, costs reduced, decision-making improved, or a strategy that actually gets implemented.",
  },
  {
    question: "Do you offer short-term or project-based work?",
    answer:
      "Yes. While some clients engage us on an ongoing advisory basis, many prefer a defined project with a clear brief and deliverables. We’re comfortable with both and will recommend the model that best suits your situation.",
  },
  {
    question: "How do I start working with Big Think Consulting?",
    answer:
      "The best first step is a conversation. Reach out via our contact page and we’ll set up an initial call to understand your situation. There’s no obligation — we want to make sure we’re the right fit before either of us commits.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6"
    >
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Common questions about working with Big Think Consulting.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
