"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close menus when clicking outside or scrolling
  useEffect(() => {
    const close = () => setOpenMenu(null);
    window.addEventListener("scroll", close);
    window.addEventListener("click", close);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow fixed top-0 left-0 z-[9999] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/logo.svg"
              width={150}
              height={50}
              alt="Vestigo Logo"
            />
          </Link>

          {/* NAVIGATION */}
          <nav
            className="hidden md:flex items-center space-x-10 font-medium text-[#1C2A7D]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HOME */}
            <Link href="/" className="hover:text-[#1C1C1C]">Home</Link>

            {/* CORPORATE */}
            <DropdownButton
              label="Corporate"
              menuKey="corporate"
              openMenu={openMenu}
              toggleMenu={toggleMenu}
            >
              <Dropdown width="200px">
                <DropdownItem href="/corporate/who-we-are">Who We Are</DropdownItem>
                <DropdownItem href="/corporate/why-us">Why Us</DropdownItem>
                <DropdownItem href="/corporate/our-team">Our Team</DropdownItem>
                <DropdownItem href="/corporate/our-partners">Our Partners</DropdownItem>
              </Dropdown>
            </DropdownButton>

            {/* SOLUTIONS */}
            <DropdownButton
              label="Solutions"
              menuKey="solutions"
              openMenu={openMenu}
              toggleMenu={toggleMenu}
            >
              <MegaMenu columns={2}>
                <Column
                  title="Core Solutions"
                  items={[
                    ["Commercial Insurance", "/solutions/commercial-insurance"],
                    ["Employee Benefits", "/solutions/employee-benefits"],
                    ["Life Insurance", "/solutions/life-insurance"],
                    ["Claims Management", "/solutions/claims-management"],
                    ["Green Insurance", "/solutions/green-insurance"],
                  ]}
                />
                <Column
                  title="Specialized Solutions"
                  items={[
                    ["Surety Bond & Credit Insurance", "/solutions/surety-bond-credit-insurance"],
                    ["Liability Suite", "/solutions/liability-suite"],
                    ["Audit & Risk Assessment", "/solutions/audit-risk-assessment"],
                  ]}
                />
              </MegaMenu>
            </DropdownButton>

            {/* INDUSTRIES */}
            <DropdownButton
              label="Industries"
              menuKey="industries"
              openMenu={openMenu}
              toggleMenu={toggleMenu}
            >
              <MegaMenu columns={3}>
                <Column
                  title="Manufacturing"
                  items={[
                    ["Chemical", "/industries/chemical"],
                    ["Pharmaceutical", "/industries/pharmaceutical"],
                    ["SME / MSME", "/industries/sme-msme"],
                    ["Plastic", "/industries/plastic"],
                    ["Textile", "/industries/textile"],
                  ]}
                />

                <Column
                  title="Services & Logistics"
                  items={[
                    ["Hospitality", "/industries/hospitality"],
                    ["BFSI", "/industries/bfsi"],
                    ["E-commerce", "/industries/e-commerce"],
                    ["Shipping & Cargo", "/industries/shipping-cargo-handling"],
                    ["Engineering", "/industries/engineering"],
                  ]}
                />

                <Column
                  title="Special Industries"
                  items={[
                    ["Green Energy", "/industries/green-energy"],
                    ["Automobile", "/industries/automobile"],
                    ["Paper Mills", "/industries/paper-mills"],
                    ["Wood / Laminates", "/industries/wood-laminates"],
                    ["Packaging", "/industries/packaging"],
                    ["Hospital / Education", "/industries/hospital-education"],
                    ["IT", "/industries/it"],
                  ]}
                />
              </MegaMenu>
            </DropdownButton>

            {/* SIMPLE LINKS */}
            <Link href="/blogs" className="hover:text-[#1C1C1C]">Blogs</Link>
            <Link href="/careers" className="hover:text-[#1C1C1C]">Careers</Link>
            <Link href="/contact" className="hover:text-[#1C1C1C]">Contact</Link>
          </nav>
        </div>
      </header>

      {/* BACKDROP when menu open */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-[5000]"
          onClick={() => setOpenMenu(null)}
        ></div>
      )}
    </>
  );
}

/* -------------------------
   REUSABLE COMPONENTS
--------------------------*/

function DropdownButton({ label, menuKey, openMenu, toggleMenu, children }) {
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu(menuKey);
        }}
        className="hover:text-[#F]"
      >
        {label} ▾
      </button>
      {openMenu === menuKey && children}
    </div>
  );
}

// Small dropdown box
function Dropdown({ width, children }) {
  return (
    <div
      className="absolute bg-white shadow-xl rounded-md border-t-4 border-[#E8D534] mt-2 p-4 z-50 text-[#1C2A7D]"
      style={{ width }}
    >
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function DropdownItem({ href, children }) {
  return (
    <Link href={href} className="block hover:text-[#1C2A7D]">
      {children}
    </Link>
  );
}

// Mega menu layout
function MegaMenu({ children, columns }) {
  return (
    <div
      className="absolute bg-white shadow-xl rounded-md border-t-4 border-[#E8D534] mt-2 p-6 grid gap-6 z-50 text-[#1C2A7D]"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        width: columns === 3 ? "900px" : "600px",
      }}
    >
      {children}
    </div>
  );
}

// Column inside mega menu
function Column({ title, items }) {
  return (
    <div>
      <h4 className="font-bold mb-2 text-[#1C2A7D]">{title}</h4>
      <div className="space-y-1">
        {items.map(([label, link]) => (
          <Link key={label} href={link} className="block hover:text-[#E8D534]">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
