"use client";

import Image from "next/image";

export default function PharmaceuticalPage() {
  return (
    <div className="text-[#1C2A7D]">

      {/* ===========================
          HERO SECTION (Different Style)
      ============================ */}
      <section className="relative w-full h-64 md:h-80 bg-[#1C2A7D] overflow-hidden">
        <Image
          src="/chemical-insurance.jpg"
          alt="Pharmaceutical Industry"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            Pharmaceutical Industry Insurance
          </h1>
        </div>
      </section>


      {/* ===========================
          INTRO SECTION (Full Width)
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div>
            <Image
              src="/chemical-insurance.jpg"
              alt="Pharmaceutical laboratory"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Insurance Solutions for the Pharmaceutical Sector
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The pharmaceutical industry operates with stringent safety,
              regulatory, research, manufacturing, and distribution demands.
              From laboratory-grade environments to large-scale production lines,
              pharma companies face risks involving contamination, product recall,
              quality failures, equipment breakdown, and temperature-sensitive losses.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Vestigo Insurance, we design specialized insurance programs that
              protect pharma manufacturers, biotechnology labs, distributors,
              research institutions, and formulation units from financial and
              operational uncertainties.
            </p>
          </div>
        </div>
      </section>


      {/* ===========================
          KEY COVERAGES (New Card Style)
      ============================ */}
      <section className="bg-[#F9FAFF] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            Essential Insurance Coverage for Pharma Companies
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Comprehensive solutions to safeguard research, manufacturing, quality, 
            logistics, and product distribution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Product Liability Insurance</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Covers adverse reactions, contamination issues, defects, or negligence 
                claims arising from medicinal products.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Product Recall Insurance</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Protects against financial losses from recalling defective or unsafe
                medicines from the market.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Contamination & Spoilage Cover</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Covers contamination during research/manufacturing and losses from
                temperature fluctuations.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Research & Development (R&D) Insurance</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Covers assets, instruments, and high-value R&D setups against accidental damage.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Cold Storage / Temperature-Control</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Prevents losses due to power failure, refrigeration breakdown, or heat damage of medicines.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="bg-white border-l-4 border-[#E8D534] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Employee Safety & Health</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Covers injuries, chemical exposure, lab accidents, and emergency medical needs.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ===========================
          REGULATORY SECTION (NEW TEMPLATE)
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-3xl font-bold mb-4">
            Regulatory Compliance Support
          </h2>

          <p className="text-gray-700 mb-6">
            Pharma companies are governed by strict global and domestic regulations.
            We assist companies in achieving compliance with:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc ml-5">
            <li>WHO-GMP Standards</li>
            <li>US FDA Compliance</li>
            <li>Schedule M Requirements</li>
            <li>Good Manufacturing Practices (GMP)</li>
            <li>Good Laboratory Practices (GLP)</li>
            <li>Environmental & Bio-waste Management Rules</li>
          </ul>
        </div>
      </section>


      {/* ===========================
          IMAGE + TEXT ALTERNATING
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT FIRST */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Protecting the Entire Pharma Supply Chain
            </h2>

            <p className="text-gray-700 leading-relaxed">
              From raw material procurement to packaging, storage, quality testing,
              distribution, and export — every stage of the pharma supply chain is 
              exposed to unique risks. Vestigo tailors insurance products to ensure 
              complete coverage across all stages.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <Image
              src="/chemical-insurance.jpg"
              alt="Pharma Supply Chain"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
