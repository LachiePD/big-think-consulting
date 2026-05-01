import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Strategy Development",
    description:
      "Define a clear, compelling direction for your organisation with strategies grounded in market reality and built for long-term advantage.",
  },
  {
    icon: Users,
    title: "Organisational Design",
    description:
      "Structure your people, processes, and capabilities to deliver on your strategy and perform at their best.",
  },
  {
    icon: ChartPie,
    title: "Market Analysis",
    description:
      "Gain deep, actionable insight into your market landscape, competitive dynamics, and emerging opportunities.",
  },
  {
    icon: FolderSync,
    title: "Change Management",
    description:
      "Navigate complex transformations with confidence, bringing your people along and embedding lasting change across the organisation.",
  },
  {
    icon: BookCheck,
    title: "Performance Improvement",
    description:
      "Identify and remove the barriers holding your business back, driving meaningful gains in efficiency, quality, and output.",
  },
  {
    icon: Zap,
    title: "Executive Advisory",
    description:
      "A trusted thought partner for senior leaders — providing candid counsel, fresh perspective, and strategic support when it matters most.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-semibold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        What We Do
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3! text-xl font-semibold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
