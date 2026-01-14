import Image from "next/image";
import Link from "next/link";
import icFacebookIcon from "@/app/assets/images/ic-facebook.svg";
import icInstagramIcon from "@/app/assets/images/ic-instagram.svg";
import icTwitterIcon from "@/app/assets/images/ic-twitter.svg";
import icYoutubeIcon from "@/app/assets/images/ic-youtube.svg";
import icTiktokIcon from "@/app/assets/images/ic-tiktok.svg";

interface FooterLink {
  label: string;
  href: string;
}

const socialLinks = [
  { icon: icFacebookIcon, alt: "facebook", href: "/" },
  { icon: icInstagramIcon, alt: "instagram", href: "/" },
  { icon: icTwitterIcon, alt: "twitter", href: "/" },
  { icon: icYoutubeIcon, alt: "youtube", href: "/" },
  { icon: icTiktokIcon, alt: "tiktok", href: "/" },
];

const footerLinks: FooterLink[] = [
  { label: "Own a Crunch", href: "/" },
  { label: "Contact", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Corporate Partnerships", href: "/" },
  { label: "Activate Corporate Discount", href: "/" },
  { label: "Healthcare Partnerships", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Terms of Use", href: "/" },
  { label: "Privacy Policy", href: "/" },
  { label: "Manage My Preferences", href: "/" },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-black ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="w-full md:w-auto">
          <ul className="mb-6 flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social.href}>
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    className="h-4"
                    width={16}
                    height={16}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-white font-bold text-sm">© Crunch Fitness</h2>
          <p className="uppercase text-gray-500 text-xs font-bold-cond border-b border-gray-500 pb-6 md:pb-0 md:border-b-0">
            All rights reserved
          </p>
        </div>
        <div className="max-w-md text-start md:text-end">
          <button className=" text-yellow font-bold text-sm tracking-[10%]">
            FREE TRIAL
          </button>
          <ul className="flex flex-wrap list-disc list-outside text-gray-500 justify-start md:justify-end text-xs font-bold uppercase gap-x-6 gap-y-2 mt-6 pl-6">
            {footerLinks.map((link, index) => (
              <li key={index} className={index === 0 ? "list-none" : "pl-2"}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
