import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://www.instagram.com/tony.farah.lens?igsh=Yzh6ZHcwa2V1cjVv",
    label: "Instagram",
    icone: <FaInstagram />,
  },
  {
    href: "https://www.facebook.com/Tony.farah01?mibextid=LQQJ4d",
    label: "Facebook",
    icone: <FaFacebook />,
  },
  { href: "tonyfarah07@gmail.com", label: "Email", icone: <MdEmail /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <Logo size={64} variant="png" className="text-muted-foreground" />
          <span className="font-display text-base text-muted-foreground tracking-wide">
            Tony Farah <span className="italic text-accent">Lens</span>
          </span>
        </div>

        {/* Social links */}
        <nav aria-label="Social links" className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              {link.icone}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Tony Farah Lens
        </p>
      </div>
    </footer>
  );
}
