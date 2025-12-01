"use client";

import Image from "next/image";
import { FaIndustry, FaShieldAlt, FaUsers, FaCogs, FaTruck, FaBalanceScale } from "react-icons/fa";

export default function SmeMsmePage() {
  return (
    <div className="text-[#1C2A7D]">

      {/* ===========================
          HERO SECTION (Clean Wide Banner)
      ============================ */}
      <section className="relative w-full h-56 md:h-72 bg-[#1C2A7D] flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
          SME / MSME Insurance Solutions
        </h1>
      </section>


      {/* ===========================
          INTRO SECTION
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">Supporting the Backbone of Indian Business</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Micro, Small, and Medium Enterprises (MSMEs) form the economic foundation of India.
          These businesses face multiple challenges such as operational risks, machinery damage,
          employee safety, cash flow interruptions, and legal liabilities.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          At Vestigo Insurance, we design affordable, flexible, and high-impact insurance
          solutions specifically tailored for small and medium-scale business operations.
        </p>

        {/* Intro Image */}
        <div className="mt-10">
          <Image
            src="/chemical-insurance.jpg"
            alt="SME MSME Insurance"
            width={900}
            height={450}
            className="rounded-xl shadow-md mx-auto"
          />
        </div>

      </section>


      {/* ===========================
          KEY BENEFITS SECTION (Icon Grid)
      ============================ */}
      <section className="bg-[#F9FAFF] py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-12">
      Why SMEs & MSMEs Need Insurance
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <BenefitCard
        icon={<FaIndustry size={40} />}
        title="Asset Protection"
        desc="Safeguard machinery, equipment, inventory, and infrastructure from fire, theft, natural disasters, and accidents."
      />

      <BenefitCard
        icon={<FaUsers size={40} />}
        title="Employee Safety"
        desc="Protect your workforce with accident cover, medical emergencies, and workplace safety policies."
      />

      <BenefitCard
        icon={<FaCogs size={40} />}
        title="Machinery Breakdown"
        desc="Cover sudden breakdown of essential equipment and avoid expensive repair downtime."
      />

      <BenefitCard
        icon={<FaBalanceScale size={40} />}
        title="Legal Liability Cover"
        desc="Protection against customer disputes, negligence claims, third-party damage, and compliance issues."
      />

      <BenefitCard
        icon={<FaTruck size={40} />}
        title="Logistics & Transit Protection"
        desc="Covers goods during transportation, shipping, loading/unloading, and transit damage."
      />

      <BenefitCard
        icon={<FaShieldAlt size={40} />}
        title="Business Continuity"
        desc="Insurance for revenue loss, operational stoppage, or crisis recovery support."
      />

    </div>
  </div>
</section>



      {/* ===========================
          CHALLENGES SECTION
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-4">Common Risks Faced by SMEs & MSMEs</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Small businesses often operate with limited financial buffers, making them vulnerable to
          disruptions. Insurance plays a critical role in ensuring financial stability.
        </p>

        <ul className="ml-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc">
          <li>Fire, explosion & electrical short-circuit</li>
          <li>Raw material damage or spoilage</li>
          <li>Machinery breakdown & equipment damage</li>
          <li>Workplace injuries & employee safety risks</li>
          <li>Theft, burglary & vandalism</li>
          <li>Liability claims from customers or vendors</li>
          <li>Natural calamities (floods, storms, earthquakes)</li>
          <li>Business interruption & revenue loss</li>
        </ul>

      </section>


      {/* ===========================
          INSURANCE PLANS SECTION
      ============================ */}
      <section className="bg-[#1C2A7D]/5 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Essential Insurance Plans for SMEs / MSMEs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <PlanCard
              title="Fire & Property Insurance"
              desc="Protects your business location, infrastructure, stock, and assets from accidental fire, explosion, or disaster."
            />

            <PlanCard
              title="Shopkeepers / Office Package Policy"
              desc="Comprehensive cover for small shops, offices, workshops, and small commercial units."
            />

            <PlanCard
              title="Marine / Transit Insurance"
              desc="Covers goods in transit — road, rail, air, or shipping — from damage or theft."
            />

            <PlanCard
              title="Machinery Breakdown"
              desc="Protects essential machinery from sudden breakdown and expensive repair costs."
            />

            <PlanCard
              title="Liability Insurance"
              desc="Covers third-party liability, customer disputes, negligence, or legal claims."
            />

            <PlanCard
              title="Employee Protection Plans"
              desc="Personal accident, medical cover, group term life, and workplace injury protection."
            />

          </div>

        </div>
      </section>


      {/* ===========================
          CTA SECTION
      ============================ */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Need Tailored Insurance for Your SME / MSME?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Vestigo specializes in risk advisory for small and medium enterprises. Our experts ensure
          affordable, easy, and effective insurance solutions customized to your business model.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-[#1C2A7D] text-white rounded-lg hover:bg-[#14205D]"
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

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      
      {/* Center icon */}
      <div className="flex justify-center mb-4 text-[#E8D534]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-[#1C2A7D]">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {desc}
      </p>
    </div>
  );
}


function PlanCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-[#1C2A7D]">{title}</h3>
      <p className="text-gray-700 mt-2 text-sm">{desc}</p>
    </div>
  );
}
