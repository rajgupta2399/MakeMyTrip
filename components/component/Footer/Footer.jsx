"use client"; // Ensure this is a client component

import { useTheme } from "next-themes";
import { Footer } from "flowbite-react";

export function BootomFooter() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <Footer
      container
      className={`${
        theme === "dark" ? "bg-[#1D232A] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}
