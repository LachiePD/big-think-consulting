import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Equity Partnership Model",
    price: "$0–$2K",
    description: "Ideal for innovators with limited upfront capital.",
    features: [
      "Core MVP development",
      "Basic UI/UX design",
      "Essential feature implementation",
      "3–4 weeks timeline",
      "5–15% equity",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Standard Development Model",
    price: "$5K–$25K",
    description: "For startups with moderate budgets.",
    features: [
      "Customized MVP development",
      "Enhanced UI/UX",
      "Integration of key functionalities",
      "2–3 weeks timeline",
      "Optional equity (2–5%)",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    name: "Premium Development Model",
    price: "$25K–$100K+",
    description: "For funded startups.",
    features: [
      "Full-scale MVP development",
      "Advanced features",
      "Scalability considerations",
      "Post-launch support",
      "Custom timeline",
      "No equity (unless negotiated)",
    ],
    buttonText: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6"
    >
      <h1 className="text-4xl xs:text-5xl font-semibold text-center tracking-tight">
        Launch Your MVP
      </h1>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto xs:text-lg">
        Tailored solutions for every budget. Whether you&apos;re a visionary with a
        groundbreaking idea or a startup ready to scale, Agfluence offers
        flexible MVP development models to suit your needs.
      </p>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 rounded-xl!":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
