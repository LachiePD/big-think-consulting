import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Discovery",
    price: "$5,000",
    description:
      "A focused diagnostic to clarify your strategic position and identify your highest-value opportunities.",
    features: [
      "4–6 week engagement",
      "Stakeholder interviews",
      "Market & competitive analysis",
      "Strategic options assessment",
      "Executive readout & recommendations",
    ],
    buttonText: "Start with Discovery",
  },
  {
    name: "Engagement",
    price: "$15,000",
    isRecommended: true,
    description:
      "A full consulting engagement to develop and begin implementing your strategy.",
    features: [
      "8–12 week engagement",
      "Everything in Discovery",
      "Strategy development workshops",
      "Roadmap & implementation plan",
      "Dedicated senior consultant",
      "Bi-weekly leadership check-ins",
    ],
    buttonText: "Start an Engagement",
    isPopular: true,
  },
  {
    name: "Partnership",
    price: "Custom",
    description:
      "An ongoing advisory relationship for organisations that want sustained strategic support.",
    features: [
      "Ongoing retainer model",
      "Everything in Engagement",
      "Monthly strategy sessions",
      "On-call executive advisory",
      "Annual strategy refresh",
      "Priority access to our team",
    ],
    buttonText: "Discuss Partnership",
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
