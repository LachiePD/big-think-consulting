import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MonitorSmartphone,
  Search,
  Server,
  Shield,
  Smartphone,
  LayoutTemplate,
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    description:
      "Custom websites built to impress and convert — designed for your brand, optimised for every device, and built for speed.",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description:
      "Reliable, fast, and secure hosting for your website. We handle the infrastructure, backups, and uptime so you can focus on your business.",
  },
  {
    icon: Search,
    title: "Search Engine Optimisation",
    description:
      "Get found on Google. We improve your rankings with proven on-page, off-page, and technical SEO strategies tailored to your industry.",
  },
  {
    icon: LayoutTemplate,
    title: "WordPress Development",
    description:
      "We build, customise, and maintain powerful WordPress sites — from simple blogs to full e-commerce stores and complex business platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver great user experiences on iOS and Android — built to your spec, on time.",
  },
  {
    icon: Shield,
    title: "Website Maintenance",
    description:
      "Keep your site fast, secure, and up-to-date with our ongoing maintenance and support packages. We monitor so you don't have to.",
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
