import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Strategy Development",
  "Organisational Design",
  "Market Analysis",
  "Change Management",
  "Performance Improvement",
  "Executive Advisory",
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 flex flex-col sm:flex-row justify-between gap-x-8 gap-y-10 px-6">
        <div className="max-w-xs">
          <Image
            src="/bigthinkLogo.png"
            alt="Big Think"
            width={40}
            height={40}
          />
          <p className="mt-4 text-muted-foreground">
            Helping ambitious organisations think bigger and grow smarter.
          </p>
        </div>

        <div>
          <h6 className="font-semibold text-foreground">Services</h6>
          <ul className="mt-6 space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      <div className="max-w-(--breakpoint-xl) mx-auto py-8 px-6">
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Big Think. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
