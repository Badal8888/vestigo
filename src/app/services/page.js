"use client";

import { useState } from "react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const services = [
    {
      title: "Corporate",
      items: ["Who We Are", "Why Us", "Our Team", "Our Partners"],
    },
    {
      title: "Industries",
      items: [
        "Chemical",
        "Pharmaceutical",
        "SME / MSME",
        "Plastic",
        "Textile",
        "Hospitality",
        "FMCG",
        "Automobile",
        "Paper Mills",
        "Wood Laminates",
        "IT / ITES",
      ],
    },
    {
      title: "Liability Insurance",
      items: [
        "Commercial Liability",
        "Credit Insurance",
        "Surety Bond",
        "Professional Indemnity",
      ],
    },
    {
      title: "Claims Management",
      items: [
        "Claim Consultancy",
        "End-to-End Claim Support",
        "IRDAI Compliance Handling",
      ],
    },
    {
      title: "Risk Assessment",
      items: [
        "Audits",
        "On-site Inspection",
        "Safety Processes",
        "Technical Evaluation",
      ],
    },
    {
      title: "Employee Benefits",
      items: ["Group Mediclaim", "Group Personal Accident", "Group Term Life"],
    },
    {
      title: "Automobile Insurance",
      items: ["Fleet Motor", "Commercial Vehicles"],
    },
    {
      title: "Marine Insurance",
      items: ["Marine Cargo", "Hull"],
    },
    {
      title: "Green Energy",
      items: ["Solar", "Wind", "Hydro Projects"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-vestigoPurple">
        Our Services
      </h2>

      <div className="mt-12 space-y-4">

        {services.map((service, index) => (
          <div key={index} className="border rounded-xl shadow-sm bg-white">
            
            {/* Dropdown Header */}
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-vestigoPurple"
              onClick={() => toggle(index)}
            >
              {service.title}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {/* Dropdown Body */}
            {openIndex === index && (
              <div className="px-6 pb-4 space-y-2">
                {service.items.map((item, i) => (
                  <p
                    key={i}
                    className="text-gray-700 border-l-4 border-vestigoYellow pl-3 py-1"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
