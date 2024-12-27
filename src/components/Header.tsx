"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

type DropdownState = "products" | "solutions" | "resources" | "pricing" | null;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownState>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleDropdown = (section: DropdownState) => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };

  const renderDropdown = (section: DropdownState, items: { href: string; label: string }[]) => (
    activeDropdown === section && (
      <div className="absolute left-0 mt-2 bg-gray-100 rounded-lg shadow-md w-[200px]">
        {items.map(({ href, label }) => (
          <Link key={href} href={href} className="block text-black px-4 py-2 no-underline">
            {label}
          </Link>
        ))}
      </div>
    )
  );

  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-4 shadow-md bg-[#043873]">
      <div className="flex items-center">
        <Image
          src="/images/logo-1.png"
          alt="Logo"
          width={191}
          height={34}
          className="w-[150px] h-[26px] lg:w-[169px] lg:h-[30px] md:w-[150px] md:h-[20px]"
        />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute md:static top-0 left-0 w-full h-full md:h-auto md:w-auto flex-col md:flex-row md:justify-center bg-[#043873] md:bg-transparent md:flex items-center md:gap-8 p-6 md:px-0 z-50 pr-8 gap-12`}
      >
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-white text-2xl md:hidden"
          >
            <FaTimes />
          </button>
        )}

        {[
          { section: "products", label: "Products", links: [{ href: "/product-1", label: "Product 1" }, { href: "/product-2", label: "Product 2" }] },
          { section: "solutions", label: "Solutions", links: [{ href: "/solution-1", label: "Solution 1" }, { href: "/solution-2", label: "Solution 2" }] },
          { section: "resources", label: "Resources", links: [{ href: "/resource-1", label: "Resource 1" }, { href: "/resource-2", label: "Resource 2" }] },
          { section: "pricing", label: "Pricing", links: [{ href: "/pricing-plan-1", label: "Plan 1" }, { href: "/pricing-plan-2", label: "Plan 2" }] },
        ].map(({ section, label, links }) => (
          <div key={section} className="relative pr-4">
            <button
              onClick={() => toggleDropdown(section as DropdownState)}
              className="flex items-center text-white no-underline"
            >
              {label} <FaChevronDown className="ml-2 hidden md:inline-block" />
            </button>
            {renderDropdown(section as DropdownState, links)}
          </div>
        ))}

        <Link
          href="/login"
          className="w-[126px] h-[50px] md:w-[90px] md:h-[40px] text-[18px] font-medium px-4 py-2 rounded-lg bg-[#FFE492] text-[#043873] no-underline flex justify-center items-center"
        >
          Login
        </Link>

        <Link
          href="/try-free"
          className="w-[169px] h-[50px] md:w-[160px] md:h-[40px] text-[18px] font-medium px-4 py-2 rounded-lg bg-[#4F9CF9] text-white text-sm no-underline flex justify-center items-center"
        >
          Try Whitespace Free
        </Link>
      </nav>
    </header>
  );
};

export default Header;
