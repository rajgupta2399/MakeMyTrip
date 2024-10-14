"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import MoonIcon from "@/components/ui/MoonIcon";
import SunIcon from "@/components/ui/SunIcon";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`${
        theme === "light" ? "bg-white text-gray-900" : "#1D232A text-white"
      }  shadow-lg`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Product
              <ChevronDownIcon
                aria-hidden="true"
                className={`h-5 w-5 flex-none ${
                  theme === "light" ? "text-gray-400" : "text-gray-200"
                }`}
              />
            </PopoverButton>
            <PopoverPanel
              className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              {/* Product panel */}
            </PopoverPanel>
          </Popover>

          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Features
          </a>
          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Marketplace
          </a>
          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Company
          </a>
        </PopoverGroup>

        {/* Theme Switcher Icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={toggleTheme}
            className="p-2"
          >
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6 text-gray-900" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* Mobile menu content */}
      </Dialog>
    </header>
  );
}
