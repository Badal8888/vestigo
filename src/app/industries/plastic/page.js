"use client";

import Image from "next/image";

export default function PlasticIndustryPage() {
  return (
    <div className="text-[#1C2A7D]">

      {/* ======================================
          HERO SECTION — MINIMAL STRIPE STYLE
      ======================================= */}
      <section className="bg-[#1C2A7D] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Plastic Industry Insurance
          </h1>
          <p className="text-white/90 mt-4 max-w-3xl mx-auto">
            Insurance protection for moulding units, packaging plants, extrusion industries,
            and plastic manufacturing operations.
          </p>
        </div>
      </section>


      {/* ======================================
          INTRO SECTION — WHITE CLEAN BLOCK
      ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <Image
              src="/chemical-insurance.jpg"
              alt="Plastic Manufacturing"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Insurance Solutions for Plastic Manufacturing Units</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Plastic manufacturing involves high-temperature machinery, electrical systems,
              moulding equipment, and raw material storage — all of which create operational risks.
              These risks can lead to fire accidents, equipment breakdown, production delays,
              employee injuries, and quality-related legal claims.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Vestigo Insurance offers tailor-made protection for injection moulding units,
              extrusion plants, packaging manufacturers, and recycling companies.
            </p>
          </div>

        </div>

      </section>


      {/* ======================================
          RISKS SECTION — DIFFERENT TIMELINE STYLE
      ======================================= */}
      <section className="bg-[#F9FAFF] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Major Risks in the Plastic Industry
          </h2>

          <div className="space-y-8 border-l-4 border-[#E8D534] pl-6">

            <TimelineItem
              title="Fire & Electrical Short Circuit"
              desc="Plastic pellets, chemicals, and high-heat machinery increase the risk of accidental fires."
            />

            <TimelineItem
              title="Machinery Breakdown"
              desc="Breakdown of moulding machines, heating rods, compressors, blowers, and extruders."
            />

            <TimelineItem
              title="Raw Material Damage"
              desc="Plastic granules and chemicals may get damaged by moisture, heat, contamination, or improper storage."
            />

            <TimelineItem
              title="Product Liability"
              desc="Claims related to defective packaging, breakage, leakage, or product failure."
            />

            <TimelineItem
              title="Employee Accidents"
              desc="Burn injuries, machine-related accidents, or chemical exposure."
            />
          </div>
        </div>
      </section>


      {/* ======================================
          COVERAGE SECTION — MODERN CARD GRID
      ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Essential Insurance Coverage for Plastic Units
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <CoverageCard
            title="Fire & Property Insurance"
            desc="Protects buildings, moulding machines, electrical setups, and stock from fire & accidental damage."
          />

          <CoverageCard
            title="Machinery Breakdown"
            desc="Repairs or replaces essential production machinery after unexpected breakdown."
          />

          <CoverageCard
            title="Product Liability Insurance"
            desc="Covers claims if your manufactured plastic goods cause damage or injury to end-users."
          />

          <CoverageCard
            title="Stock & Raw Material Cover"
            desc="Coverage for plastic granules, additives, moulds, packaging materials, and finished goods."
          />

          <CoverageCard
            title="Employee Accident Cover"
            desc="Workplace injury protection for labour, machine operators, and technical staff."
          />

          <CoverageCard
            title="Business Interruption Insurance"
            desc="Compensation for production downtime caused by insured events."
          />

        </div>
      </section>


      {/* ======================================
          REGULATORY SECTION — INVERTED COLORS
      ======================================= */}
      <section className="bg-[#1C2A7D]/10 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">Regulatory Compliance & Support</h2>

          <p className="text-gray-700 mb-6 max-w-3xl">
            Plastic manufacturers must follow strict safety, environmental, and labour regulations.
            Our insurance advisory helps align your business with:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 list-disc ml-5">
            <li>PESO Guidelines</li>
            <li>Fire Safety Regulations</li>
            <li>Environmental Waste Management Rules</li>
            <li>Labour & Worker Safety Compliance</li>
            <li>Factory Act Requirements</li>
            <li>Pollution Control Board (PCB) Certifications</li>
          </ul>

        </div>
      </section>


      {/* ======================================
          CTA SECTION — DARK MINIMAL
      ======================================= */}
      <section className="text-center py-20 text-[#1C2A7D]">
        <h2 className="text-3xl font-bold mb-4">Looking for Plastic Industry Insurance?</h2>

        <p className="text-black max-w-2xl mx-auto mb-6">
          Our advisors specialize in designing insurance programs for small, medium, and
          large-scale plastic manufacturing operations.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-[#E8D534] text-black rounded-lg font-semibold hover:bg-[#d1bd31]"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}


/* =====================================
   REUSABLE COMPONENTS
===================================== */

function TimelineItem({ title, desc }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2">{desc}</p>
    </div>
  );
}

function CoverageCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-[#1C2A7D]">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
