import Image from "next/image";

export const Logo = () => (
  <Image
    src="/bigthinkLogo.png"
    alt="Big Think"
    height={40}
    width={160}
    style={{ width: "auto" }}
    priority
  />
);
