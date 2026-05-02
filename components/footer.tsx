import { Separator } from "@/components/ui/separator";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { title: "Website Design", href: "#features" },
      { title: "Web Hosting", href: "#features" },
      { title: "SEO", href: "#features" },
      { title: "WordPress", href: "#features" },
      { title: "Mobile Apps", href: "#features" },
      { title: "Maintenance", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Our work", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Social",
    links: [
      { title: "LinkedIn", href: "#" },
      { title: "Twitter", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-2">
          <Image
            src="/bigthinkLogo.png"
            alt="Big Think"
            height={40}
            width={160}
            style={{ width: "auto" }}
          />
          <p className="mt-4 text-muted-foreground">
            Building great websites and digital solutions for businesses of all sizes.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://big-think-consulting.onrender.com">
            Big Think
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
