import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    description:
      "A clean, professional website to get your business online and looking great.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "Contact form",
      "Basic on-page SEO",
      "1 month of support",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Business",
    price: "$2,999",
    isRecommended: true,
    description:
      "A full-featured website with everything you need to grow your business online.",
    features: [
      "Up to 15 pages",
      "Everything in Starter",
      "Content management system",
      "SEO optimisation",
      "Google Analytics setup",
      "3 months of support",
    ],
    buttonText: "Get Started",
    isPopular: true,
  },
  {
    name: "Custom",
    price: "Custom",
    description:
      "For larger or more complex projects — e-commerce, apps, integrations, and beyond.",
    features: [
      "Everything in Business",
      "E-commerce / app integration",
      "Custom functionality",
      "Ongoing maintenance plan",
      "Dedicated account manager",
      "Priority support",
    ],
    buttonText: "Discuss Your Project",
  },
];

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6"
    >
      <h1 className="text-4xl xs:text-5xl font-semibold text-center tracking-tight">
        Pricing
      </h1>
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
