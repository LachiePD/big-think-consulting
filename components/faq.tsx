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
    question: "What types of websites do you build?",
    answer:
      "We build all types — from simple portfolio and brochure sites to e-commerce stores, membership platforms, and web applications. We work with startups, small businesses, and growing companies across all industries.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website typically takes 2–4 weeks from kick-off to launch. Larger or more complex projects can take longer. We provide a clear timeline before we start, and keep you updated throughout.",
  },
  {
    question: "Do you offer website hosting?",
    answer:
      "Yes. We offer managed hosting on fast, reliable infrastructure. We handle setup, security, updates, and monitoring — so your site stays up and running without you having to think about it.",
  },
  {
    question: "Can you work with my existing WordPress site?",
    answer:
      "Absolutely. We redesign, rebuild, and maintain WordPress sites of all kinds — whether you need a refresh, new functionality, a plugin fix, or ongoing support. We're comfortable with WordPress at any level.",
  },
  {
    question: "Does SEO come with the website?",
    answer:
      "Every website we build includes basic on-page SEO as standard — clean structure, meta tags, fast load times, and mobile optimisation. We also offer dedicated SEO packages for businesses looking to grow their organic search visibility over time.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just get in touch via our contact page or hit the 'Get a Free Quote' button. We'll have a quick call to understand your project and put together a proposal — no obligation, no jargon.",
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
        Common questions about working with Big Think.
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
