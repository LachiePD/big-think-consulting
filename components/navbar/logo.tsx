import Image from "next/image";

export const Logo = () => (
  <Image
    src="/bigthinkLogo.png"
    alt="Big Think"
    width={40}
    height={40}
    priority
  />
);
