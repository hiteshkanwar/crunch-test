"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import crunchLogo from "@/app/assets/images/crunch-logo.svg";
import langIcon from "@/app/assets/images/lang-icon.svg";
import userIcon from "@/app/assets/images/user-icon.svg";

interface MegaMenuItem {
  title: string;
  description: string;
}

const megaMenuItems: MegaMenuItem[] = [
  {
    title: "CLASSES",
    description: "Make it a group thing and find your strength in numbers!",
  },
  {
    title: "HIITZONE",
    description:
      "Team-based, high-intensity interval training that gets the job done!",
  },
  {
    title: "TRAINING",
    description:
      "Our certified personal trainers create the perfect programs, designed 100% around you.",
  },
  {
    title: "CRUNCH+",
    description:
      "Feel the burn and crush your goals at home, at the gym or on-the-go!",
  },
];

const aboutMenuItems: MegaMenuItem[] = [
  {
    title: "About Us",
    description:
      "With more than 400 locations nationwide, Crunch has room for everyone. No Judgments!",
  },
  {
    title: "The Hub",
    description:
      "Our blog that features everything from workout tips to healthy recipes!",
  },
  {
    title: "FAQ",
    description:
      "The answers you need...and the ones you didn't know you needed.",
  },
];

const enterpriseMenuItems: MegaMenuItem[] = [
  {
    title: "Activate corporate discount",
    description:
      "Claim your exclusive Crunch Fitness discount offered by your company.",
  },
  {
    title: "corporate partnerships",
    description:
      "Encourage your employees to improve their physical health and overall mental wellness!",
  },
  {
    title: "Enterprise Solution 3",
    description:
      "Dummy description for enterprise solution 3. This will be updated later.",
  },
  {
    title: "Enterprise Solution 4",
    description:
      "Dummy description for enterprise solution 4. This will be updated later.",
  },
  {
    title: "Enterprise Solution 5",
    description:
      "Dummy description for enterprise solution 5. This will be updated later.",
  },
];

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: "LOCATIONS", href: "/" },
  { name: "WORK OUT WITH US", href: "/", hasDropdown: true },
  { name: "ABOUT", href: "/", hasDropdown: true },
  { name: "ENTERPRISE", href: "/", hasDropdown: true },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "FR", name: "Français" },
  { code: "DE", name: "Deutsch" },
  { code: "IT", name: "Italiano" },
  { code: "PT", name: "Português" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleMobileDropdown = (itemName: string) => {
    setMobileExpanded(mobileExpanded === itemName ? null : itemName);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pr-0 sm:pr-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <Link
                href="/"
                className="flex items-center static md:absolute h-10 md:h-[90px] top-[8px] z-10"
              >
                <Image
                  src={crunchLogo}
                  alt="Crunch Fitness"
                  className="h-full w-full"
                />
              </Link>
              <span className="text-sm font-bold uppercase pl-[170px] hidden md:block">
                #NOJUDGMENTS
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block relative">
                <div
                  className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition-colors"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  onMouseEnter={() => setIsLanguageOpen(true)}
                  onMouseLeave={() => setIsLanguageOpen(false)}
                >
                  <Image src={langIcon} alt="Language" width={20} height={20} />
                  <span className="text-sm">{selectedLanguage}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isLanguageOpen && (
                  <div
                    className="absolute top-full right-0 pt-2 bg-transparent z-50"
                    onMouseEnter={() => setIsLanguageOpen(true)}
                    onMouseLeave={() => setIsLanguageOpen(false)}
                  >
                    <div className="bg-white shadow-lg rounded-md py-2 min-w-[150px]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code);
                            setIsLanguageOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                            selectedLanguage === lang.code
                              ? "text-red font-bold"
                              : "text-primary"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lang.code}</span>
                            <span className="text-xs text-secondary ml-2">
                              {lang.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="hidden md:block w-px h-6 bg-gray-700"></div>

              <div className="hidden md:flex items-center cursor-pointer hover:text-orange-500 transition-colors">
                <Image src={userIcon} alt="User" width={20} height={20} />
              </div>
              <div className="flex items-center">
                <button className="bg-yellow text-white px-6 py-4 text-sm transition-colors cursor-pointer uppercase">
                  FREE TRIAL
                </button>
                <button className="bg-linear-to-r from-red to-orange text-white px-6 py-4 text-sm transition-colors cursor-pointer uppercase">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center h-14">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className=""
                  onMouseEnter={() =>
                    item.hasDropdown && setHoveredDropdown(item.name)
                  }
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-primary font-bold text-sm uppercase hover:text-red transition-colors ${
                      hoveredDropdown === item.name ? "text-red" : ""
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          hoveredDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.name === "WORK OUT WITH US" &&
                    hoveredDropdown === item.name && (
                      <div
                        className="absolute top-8 left-0 pt-2 w-screen z-50"
                        onMouseEnter={() => setHoveredDropdown(item.name)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                      >
                        <div className="bg-white shadow-lg py-8">
                          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {megaMenuItems.map((megaItem, index) => (
                                <div
                                  key={index}
                                  className="cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                  <h3 className="text-primary font-bold-cond text-base mb-1 uppercase">
                                    {megaItem.title}
                                  </h3>
                                  <p className="text-secondary text-sm">
                                    {megaItem.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {item.name === "ABOUT" && hoveredDropdown === item.name && (
                    <div
                      className="absolute top-8 left-0 pt-2 w-screen z-50"
                      onMouseEnter={() => setHoveredDropdown(item.name)}
                      onMouseLeave={() => setHoveredDropdown(null)}
                    >
                      <div className="bg-white shadow-lg py-8">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {aboutMenuItems.map((menuItem, index) => (
                              <div
                                key={index}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                              >
                                <h3 className="text-primary font-bold-cond text-base mb-1 uppercase">
                                  {menuItem.title}
                                </h3>
                                <p className="text-secondary text-sm">
                                  {menuItem.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.name === "ENTERPRISE" &&
                    hoveredDropdown === item.name && (
                      <div
                        className="absolute top-8 left-0 pt-2 w-screen z-50"
                        onMouseEnter={() => setHoveredDropdown(item.name)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                      >
                        <div className="bg-white shadow-lg py-8">
                          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {enterpriseMenuItems.map((menuItem, index) => (
                                <div
                                  key={index}
                                  className="cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                  <h3 className="text-primary font-bold-cond text-base mb-1 uppercase">
                                    {menuItem.title}
                                  </h3>
                                  <p className="text-secondary text-sm">
                                    {menuItem.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white fixed inset-0 z-50 overflow-y-auto">
          <div className="md:p-4">
            <div className="flex items-center justify-between mb-6 px-6 pt-6">
              <div className="flex items-center gap-4">
                <Image
                  src={crunchLogo}
                  alt="Crunch Fitness"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleMobileDropdown("LANGUAGE")}
                  >
                    <Image
                      src={langIcon}
                      alt="Language"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm">{selectedLanguage}</span>
                    {mobileExpanded === "LANGUAGE" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                  {mobileExpanded === "LANGUAGE" && (
                    <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-md py-2 min-w-[150px] z-50 shadow-lg">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code);
                            toggleMobileDropdown("LANGUAGE");
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedLanguage === lang.code
                              ? "text-red font-bold bg-gray-700"
                              : "text-white hover:bg-gray-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lang.code}</span>
                            <span className="text-xs text-gray-300 ml-2">
                              {lang.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2 mb-6">
              <div className="space-y-3 px-6 mt-10">
                <button className="w-full bg-yellow text-white font-bold py-5 px-8 uppercase tracking-[10%]">
                  FREE TRIAL
                </button>
                <button className="w-full bg-linear-to-r from-red to-yellow text-white font-bold py-5 px-8 uppercase tracking-[10%]">
                  JOIN
                </button>
              </div>
              <div className="px-6">
                <Link
                  href="/"
                  className="text-white  font-bold-cond flex items-center justify-center font-bold py-5 px-8 uppercase tracking-[10%]"
                  onClick={() => setIsOpen(false)}
                >
                  MEMBER LOGIN
                </Link>
                <Link
                  href="/"
                  className="block text-white uppercase font-bold-cond py-4 px-3"
                  onClick={() => setIsOpen(false)}
                >
                  LOCATIONS
                </Link>
              </div>

              <div>
                <div className="px-6">
                  <button
                    onClick={() => toggleMobileDropdown("WORK OUT WITH US")}
                    className="w-full flex items-center justify-between text-white uppercase font-bold-cond py-4 px-3"
                  >
                    WORK OUT WITH US
                    {mobileExpanded === "WORK OUT WITH US" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {mobileExpanded === "WORK OUT WITH US" && (
                  <div className="px-10 pt-4 pb-4 space-y-6 bg-[#414141]">
                    {megaMenuItems.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-white font-bold-cond text-base mb-1 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ABOUT expandable */}
              <div>
                <div className="px-6">
                  <button
                    onClick={() => toggleMobileDropdown("ABOUT")}
                    className="w-full flex items-center justify-between text-white uppercase font-bold-cond py-4 px-3"
                  >
                    ABOUT
                    {mobileExpanded === "ABOUT" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {mobileExpanded === "ABOUT" && (
                  <div className="px-10 pt-4 pb-4 space-y-6 bg-[#414141]">
                    {aboutMenuItems.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-white font-bold-cond text-base mb-1 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ENTERPRISE expandable */}
              <div>
                <div className="px-6">
                  <button
                    onClick={() => toggleMobileDropdown("ENTERPRISE")}
                    className="w-full flex items-center justify-between text-white uppercase font-bold-cond py-4 px-3"
                  >
                    ENTERPRISE
                    {mobileExpanded === "ENTERPRISE" ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {mobileExpanded === "ENTERPRISE" && (
                  <div className="px-10 pt-4 pb-4 space-y-6 bg-[#414141]">
                    {enterpriseMenuItems.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-white font-bold-cond text-base mb-1 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
