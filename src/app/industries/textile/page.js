"use client";

import Image from "next/image";

export default function TextileIndustryPage() {
  return (
    <div className="text-[#1C2A7D]">

      {/* ======================================
          MODERN HERO — CENTERED WITH SHAPES
      ======================================= */}
      <section className="relative bg-gradient-to-r from-[#1C2A7D] to-[#3A4CA8] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Textile Industry Insurance</h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Comprehensive insurance solutions for spinning mills, weaving units,
          garment factories, dyeing plants, and textile processing operations.
        </p>

        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>


      {/* ======================================
          FULL-WIDTH IMAGE BANNER
      ======================================= */}
      <section>
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/chemical-insurance.jpg"
            alt="Textile Industry"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
              Protecting India’s Textile Economy
            </h2>
          </div>
        </div>
      </section>


      {/* ======================================
          INTRO SECTION — ZIG ZAG
      ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Insurance for Textile & Apparel Units</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The textile industry involves high-value machinery, fire-prone production environments,
              large stock inventory, and an extensive workforce — all of which increase operational risk.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Vestigo Insurance offers customized insurance packages suitable for spinning mills,
              weaving units, garment manufacturers, knitting factories, dyeing & printing units,
              and textile exporters.
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div>
            <Image
              src="/chemical-insurance.jpg"
              alt="Textile Machine"
              width={600}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>


      {/* ======================================
          RISKS SECTION — HIGHLIGHT BOXES
      ======================================= */}
      <section className="bg-[#F9FAFF] py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">Major Risks in Textile Production</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <HighlightCard 
              title="Fire & Flammable Materials"
              desc="Cotton, fibers, and fabrics are highly combustible, increasing fire risks."
            />

            <HighlightCard 
              title="Machinery Breakdown"
              desc="Breakdowns in spinning, carding, weaving, or dyeing machines can halt operations."
            />

            <HighlightCard 
              title="Stock Damage"
              desc="Large inventory of fabrics, yarn, dye chemicals, and packing materials is vulnerable to heat, moisture, or fire."
            />

            <HighlightCard 
              title="Quality & Compliance Risks"
              desc="Quality failures, defects, or export compliance issues can lead to financial liabilities."
            />

            <HighlightCard 
              title="Employee Accidents"
              desc="High-speed machines and chemicals increase injury and occupational risk."
            />

            <HighlightCard 
              title="Business Interruption"
              desc="Industrial downtime can lead to major revenue loss across the production chain."
            />

          </div>

        </div>
      </section>


      {/* ======================================
          COVERAGE SECTION — SIDE IMAGE FORMAT
      ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <Image
              src="/chemical-insurance.jpg"
              alt="Textile Factory"
              width={600}
              height={450}
              className="rounded-xl shadow-md object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Essential Insurance Coverage for Textile Units
            </h2>

            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc ml-5">
              <li>Fire, Explosion & Property Damage</li>
              <li>Machinery Breakdown for Spinning/Weaving Units</li>
              <li>Stock & Raw Material Insurance (Cotton, Yarn, Fabrics)</li>
              <li>Marine/Transit Cover for Domestic & Export Movements</li>
              <li>Employee Health, Safety & Accident Insurance</li>
              <li>Liability Insurance for Export/Quality Issues</li>
              <li>Business Interruption Due to Machine Failure</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ======================================
          CTA SECTION — ELEGANT + LIGHT
      ======================================= */}
      <section className="text-center text-[#1C2A7D]  py-16">
        <h2 className="text-3xl font-bold mb-4">
          Secure Your Textile Manufacturing Operations Today
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Our experts help textile and apparel businesses reduce risk, protect assets,
          and ensure business continuity across the entire production chain.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-[#E8D534] text-black font-semibold rounded-lg hover:bg-[#d1bd31]"
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

function HighlightCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  );
}
