import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "svg" | "png";
}

export default function Logo({ size = 40, className, variant = "svg" }: LogoProps) {
  return (
    <Image
      src={variant === "png" ? "/logo.png" : "/logo.svg"}
      alt="TGF Photography logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}