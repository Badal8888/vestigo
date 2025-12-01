"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  // Close dropdown on scroll/click
  useEffect(() => {
    const close = () => setOpenMenu(null);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow fixed top-0 left-0 z-[9999] h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" onClick={(e) => e.stopPropagation()}>
            <Image src="/logo.svg" width={150} height={50} alt="Vestigo Logo" />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center space-x-10 font-medium text-[#1C2A7D]"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="/" className="hover:text-[#1C1C1C]">Home</Link>

            {/* CORPORATE */}
            <DropdownButton label="Corporate" menuKey="corporate" openMenu={openMenu} toggleMenu={toggleMenu}>
              <Dropdown width="200px">
                <DropdownItem href="/corporate/who-we-are">Who We Are</DropdownItem>
                <DropdownItem href="/corporate/why-us">Why Us</DropdownItem>
                <DropdownItem href="/corporate/our-team">Our Team</DropdownItem>
                <DropdownItem href="/corporate/our-partners">Our Partners</DropdownItem>
              </Dropdown>
            </DropdownButton>

            {/* SOLUTIONS */}
            <DropdownButton label="Solutions" menuKey="solutions" openMenu={openMenu} toggleMenu={toggleMenu}>
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
            <div className="relative">
              <button
                className="hover:text-[#1C1C1C]"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === "industries" ? null : "industries");
                  window.location.href = "/industries"; 
                }}
              >
                Industries ▾
              </button>

              {openMenu === "industries" && (
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
              )}
            </div>

            <Link href="/blogs">Blogs</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-3xl text-[#1C2A7D]"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      {/* MOBILE SIDEBAR MENU */}
{mobileOpen && (
  <div
    className="fixed inset-0 bg-black/40 z-[9999] md:hidden"
    onClick={() => setMobileOpen(false)} // Close when clicking outside
  >
    <div
      className="absolute left-0 top-0 w-72 h-full bg-white shadow-lg p-6 animate-slide"
      onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
    >
      {/* Close Button */}
      <button
        className="text-3xl text-[#1C2A7D] mb-6"
        onClick={() => setMobileOpen(false)}
      >
        <FiX />
      </button>

      {/* Mobile Navigation List */}
      <ul className="space-y-4 text-[#1C2A7D] text-lg">

        <li>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* Corporate */}
        <li>
          <button
            className="w-full flex justify-between items-center"
            onClick={() => toggleMobileDropdown("corporate")}
          >
            Corporate <FiChevronDown />
          </button>

          {mobileDropdown === "corporate" && (
            <ul className="ml-4 mt-2 text-sm space-y-2">
              <li><Link href="/corporate/who-we-are" onClick={() => setMobileOpen(false)}>Who We Are</Link></li>
              <li><Link href="/corporate/why-us" onClick={() => setMobileOpen(false)}>Why Us</Link></li>
              <li><Link href="/corporate/our-team" onClick={() => setMobileOpen(false)}>Our Team</Link></li>
              <li><Link href="/corporate/our-partners" onClick={() => setMobileOpen(false)}>Our Partners</Link></li>
            </ul>
          )}
        </li>

        {/* Solutions */}
        <li>
          <button
            className="w-full flex justify-between items-center"
            onClick={() => toggleMobileDropdown("solutions")}
          >
            Solutions <FiChevronDown />
          </button>

          {mobileDropdown === "solutions" && (
            <ul className="ml-4 mt-2 text-sm space-y-2">
              <li><Link href="/solutions/commercial-insurance" onClick={() => setMobileOpen(false)}>Commercial Insurance</Link></li>
              <li><Link href="/solutions/employee-benefits" onClick={() => setMobileOpen(false)}>Employee Benefits</Link></li>
              <li><Link href="/solutions/life-insurance" onClick={() => setMobileOpen(false)}>Life Insurance</Link></li>
              <li><Link href="/solutions/claims-management" onClick={() => setMobileOpen(false)}>Claims Management</Link></li>
              <li><Link href="/solutions/green-insurance" onClick={() => setMobileOpen(false)}>Green Insurance</Link></li>
              <li><Link href="/solutions/surety-bond-credit-insurance" onClick={() => setMobileOpen(false)}>Surety Bond</Link></li>
            </ul>
          )}
        </li>

        {/* Industries */}
        <li>
          <button
            className="w-full flex justify-between items-center"
            onClick={() => toggleMobileDropdown("industries")}
          >
            Industries <FiChevronDown />
          </button>

          {mobileDropdown === "industries" && (
            <ul className="ml-4 mt-2 text-sm space-y-2">
              <li><Link href="/industries/chemical" onClick={() => setMobileOpen(false)}>Chemical</Link></li>
              <li><Link href="/industries/pharmaceutical" onClick={() => setMobileOpen(false)}>Pharmaceutical</Link></li>
              <li><Link href="/industries/sme-msme" onClick={() => setMobileOpen(false)}>SME / MSME</Link></li>
            </ul>
          )}
        </li>

        <li><Link href="/blogs" onClick={() => setMobileOpen(false)}>Blogs</Link></li>
        <li><Link href="/careers" onClick={() => setMobileOpen(false)}>Careers</Link></li>
        <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>

      </ul>
    </div>
  </div>
)}


      <style>{`
        @keyframes slide {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide {
          animation: slide 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

/* -------------------- REUSABLE COMPONENTS -------------------- */

function DropdownButton({ label, menuKey, openMenu, toggleMenu, children }) {
  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu(menuKey);
        }}
      >
        {label} ▾
      </button>
      {openMenu === menuKey && children}
    </div>
  );
}

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

function MegaMenu({ children, columns }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-md border-t-4 border-[#E8D534] mt-2 p-6 grid gap-3 z-50 text-[#1C2A7D]"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        width: columns === 3 ? "750px" : "500px",
      }}
    >
      {children}
    </div>
  );
}

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
