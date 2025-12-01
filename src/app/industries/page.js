"use client";

import { 
  FaIndustry, 
  FaFlask, 
  FaHospital, 
  FaTruck, 
  FaLeaf, 
  FaCarBattery, 
  FaCogs, 
  FaUniversity,
  FaBox,
  FaBolt,
  FaBuilding,
  FaStore,
  FaTruckLoading,
} from "react-icons/fa";

export default function IndustriesPage() {
  const categories = [
    {
      title: "Manufacturing",
      items: [
        { name: "Chemical", slug: "chemical", icon: <FaFlask className="text-2xl text-[#E8D534]" /> },
        { name: "Pharmaceutical", slug: "pharmaceutical", icon: <FaStore className="text-2xl text-[#E8D534]" /> },
        { name: "SME / MSME", slug: "sme-msme", icon: <FaBuilding className="text-2xl text-[#E8D534]" /> },
        { name: "Plastic", slug: "plastic", icon: <FaBox className="text-2xl text-[#E8D534]" /> },
        { name: "Textile", slug: "textile", icon: <FaBolt className="text-2xl text-[#E8D534]" /> },
      ],
    },

    {
      title: "Services & Logistics",
      items: [
        { name: "Hospitality", slug: "hospitality", icon: <FaHospital className="text-2xl text-[#E8D534]" /> },
        { name: "BFSI", slug: "bfsi", icon: <FaUniversity className="text-2xl text-[#E8D534]" /> },
        { name: "E-commerce", slug: "e-commerce", icon: <FaStore className="text-2xl text-[#E8D534]" /> },
        { name: "Shipping & Cargo", slug: "shipping-cargo-handling", icon: <FaTruckLoading className="text-2xl text-[#E8D534]" /> },
        { name: "Engineering", slug: "engineering", icon: <FaCogs className="text-2xl text-[#E8D534]" /> },
      ],
    },

    {
      title: "Special Industries",
      items: [
        { name: "Green Energy", slug: "green-energy", icon: <FaLeaf className="text-2xl text-[#E8D534]" /> },
        { name: "Automobile", slug: "automobile", icon: <FaCarBattery className="text-2xl text-[#E8D534]" /> },
        { name: "Paper Mills", slug: "paper-mills", icon: <FaBuilding className="text-2xl text-[#E8D534]" /> },
        { name: "Wood / Laminates", slug: "wood-laminates", icon: <FaBox className="text-2xl text-[#E8D534]" /> },
        { name: "Packaging", slug: "packaging", icon: <FaBox className="text-2xl text-[#E8D534]" /> },
        { name: "Hospital / Education", slug: "hospital-education", icon: <FaHospital className="text-2xl text-[#E8D534]" /> },
        { name: "IT", slug: "it", icon: <FaCogs className="text-2xl text-[#E8D534]" /> },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-[#1C2A7D]">Industries We Serve</h1>
      <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
        Explore insurance solutions designed for your industry category.
      </p>

      {/* CATEGORY SECTIONS */}
      <div className="mt-16 space-y-16">
        {categories.map((cat, idx) => (
          <div key={idx}>
            
            {/* Category Heading */}
            <div className="flex flex-col items-center mb-6">
                <h2 className="text-3xl font-semibold text-[#1C2A7D] text-center relative pb-2">
                    {cat.title}
                    <span className="block mx-auto mt-2 h-1 w-20 bg-[#E8D534] rounded-full"></span>
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {cat.items.map((item) => (
                <a
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="
                bg-white p-10 rounded-2xl shadow-lg 
                hover:shadow-xl hover:-translate-y-2 hover:border-[#E8D534]
                transition-all border border-gray-200 
                text-center flex flex-col items-center 
                h-full duration-300
                "
                >
                    <div className="mb-4 text-4xl">{item.icon}</div>

                    <h3 className="text-2xl font-semibold text-[#1C2A7D]">
                        {item.name}
                    </h3>

                    <p className="text-gray-600 text-md mt-3">
                        Learn more about the {item.name} sector.
                    </p>
                </a>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
