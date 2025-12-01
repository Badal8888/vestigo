"use client";

import Image from "next/image";

export default function ChemicalPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* ===========================
          TOP HEADING
      ============================ */}
      <h1 className="text-4xl font-bold text-[#1C2A7D] text-center mb-16">
        Chemical Industry Insurance
      </h1>

      {/* ===========================
          SECTION 1 — TEXT + IMAGE
      ============================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-2xl font-semibold text-[#1C2A7D] mb-4">
            Insurance Solutions for the Chemical Sector
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Chemical industries handle hazardous substances, operate complex
            machinery, and manage high-temperature processes—exposing the
            business to significant risks related to fire, explosion, human
            safety, pollution, contamination, and regulatory compliance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Vestigo Insurance, we specialize in designing insurance programs
            that protect chemical manufacturers, processors, distributors,
            storage warehouses, and transporters from operational and legal
            liabilities.
          </p>

          <ul className="list-disc ml-5 text-gray-700 mt-4 space-y-2">
            <li>Chemical Plant Insurance</li>
            <li>Machinery Breakdown & Equipment Protection</li>
            <li>Pollution & Environmental Liability Cover</li>
            <li>Fire, Explosion & Property Damage</li>
            <li>Employee Accident, Health & Safety Coverage</li>
            <li>Stock, Raw Materials & Finished Goods Insurance</li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/chemical-insurance.jpg" 
            alt="Chemical Industry"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>


      {/* ===========================
          SECTION 2 — KEY RISKS
      ============================ */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-[#1C2A7D] mb-4">
          Key Risks Faced by Chemical Industries
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Due to the nature of operations, chemical plants face multiple high-impact risks.
          Insurance plays a crucial role in protecting assets, employees, and operations.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700 ml-5">
          <li className="list-disc">Combustible and flammable chemicals</li>
          <li className="list-disc">Equipment overheating & machinery breakdown</li>
          <li className="list-disc">Toxic fumes, leaks & chemical spills</li>
          <li className="list-disc">Storage tank explosions</li>
          <li className="list-disc">Environmental contamination</li>
          <li className="list-disc">Workplace accidents & health hazards</li>
          <li className="list-disc">Business interruption due to incidents</li>
        </ul>
      </div>


      {/* ===========================
          SECTION 3 — INSURANCE PRODUCTS
      ============================ */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-[#1C2A7D] text-center mb-2">
          Essential Insurance Coverages for Chemical Plants
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Tailored solutions to protect infrastructure, operations, employees, and the environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Fire & Explosion Insurance</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Protects manufacturing units from accidental fire, blasts, ignition of chemicals and flammable gases.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Pollution Liability Insurance</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Covers legal liabilities arising from accidental pollution, contamination, and chemical spills.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Machinery Breakdown</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Covers reactors, boilers, compressors, pumps, and other high-value equipment.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Stock & Raw Materials</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Insurance for hazardous chemicals, volatile liquids, and finished products.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Employee Safety Insurance</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Covers injuries, medical emergencies, and exposure to toxic chemicals.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#1C2A7D]">Business Interruption</h3>
            <p className="mt-3 text-gray-700 text-sm">
              Compensates for loss of profit during shutdowns caused by insured incidents.
            </p>
          </div>

        </div>
      </div>


      {/* ===========================
          SECTION 4 — SAFETY + IMAGE
      ============================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1C2A7D] mb-4">
            Safety Compliance & Regulatory Support
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Chemical facilities must adhere to strict regulatory frameworks and industry safety norms.
            Our expert advisory ensures compliance with:
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Environmental Protection Laws</li>
            <li>Hazardous Substances Handling Rules</li>
            <li>Factory Act & Safety Regulations</li>
            <li>On-site and Off-site Emergency Plans</li>
            <li>Fire Safety & Occupational Health Checks</li>
          </ul>
        </div>

      </div>


      {/* ===========================
          FINAL CTA
      ============================ */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-[#1C2A7D]">
          Need Expert Insurance for Your Chemical Plant?
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Our specialists can evaluate your risk exposure and recommend the best protection plan tailored to your chemical operations.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 bg-[#1C2A7D] text-white rounded-lg hover:bg-[#14205D]"
        >
          Contact Us
        </a>
      </div>

    </div>
  );
}
