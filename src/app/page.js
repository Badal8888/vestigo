import Image from "next/image";
import { FaShieldAlt, FaBook, FaChartBar, FaFolder, FaHandshake, FaStethoscope } from "react-icons/fa";

export default function Home() {
  return (
    <div>

      {/* ===========================
          HERO SECTION
      ============================ */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1C2A7D] leading-tight">
              Welcome to Vestigo Insurance
            </h1>

            <p className="mt-4 text-gray-700 text-lg md:text-xl">
              Professional Insurance Advisory for Businesses, Corporates & Industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/solutions/commercial-insurance"
                className="px-6 py-3 bg-[#1C2A7D] text-white rounded-lg hover:bg-[#14205D]"
              >
                Explore Solutions
              </a>

              <a
                href="/industries/chemical"
                className="px-6 py-3 bg-[#E8D534] text-black rounded-lg hover:bg-[#d2c12f]"
              >
                Industries We Serve
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/1.png"
              width={450}
              height={450}
              alt="Vestigo Insurance Services"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


      {/* ===========================
          ABOUT US SECTION
      ============================ */}
      <section className="bg-[#F9FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C2A7D]">
            About Vestigo
          </h2>
          <br></br>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            The name "Vestigo" stems from the Latin word "vestigare" - to track, trace or search out. 
            It mirrors our mission to uncover truly tailored insurance solutions by deeply understanding your needs, assessing risks and proactively anticipating what lies ahead.
            "We don't just advise - we uncover, we explore, we protect. That's the spirit of Vestigo."
          </p>

          {/* CARDS */}
          <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* OUR VISION */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#1C2A7D] text-center">Our Vision</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-center">
                  To be the trusted leader in business insurance, delivering innovative &
                  tech-powered solutions that help businesses scale with certainty and
                  confidence.
                </p>
              </div>

              {/* OUR MISSION */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#1C2A7D] text-center">Our Mission</h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-center">
                  To transform the insurance experience by delivering intelligent,
                  tech-driven, expert-backed solutions that protect and empower
                  organizations with confidence.
                </p>
              </div>

              {/* OUR VALUES */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#1C2A7D] text-center">Our Values</h3>
                
                <ul className="mt-4 text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#1C2A7D] mr-2">•</span> 
                    Integrity: We operate with transparency & honesty.
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#1C2A7D] mr-2">•</span>
                    Customer Focus: Your needs are at the heart of everything we do.
                  </li>

                  <li className="flex items-start">
                    <span className="text-[#1C2A7D] mr-2">•</span>
                    Excellence: We deliver superior service & solutions.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          TRUSTED PARTNERS SECTION
      =========================== */}
      <section className="bg-[#1C2A7D] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            🤝 Join the Vestigo Trusted Network 🤝
          </h2>

          <p className="text-white/80 mt-4 max-w-2xl mx-auto">
            Partnering with leading insurers & financial organizations to offer
            reliable protection for businesses & industries.
          </p>

          {/* Partners Box */}
          <div className="bg-white rounded-2xl shadow-lg p-10 mt-12">
            <h3 className="text-2xl font-semibold text-[#1C2A7D] mb-8">
              Our Trusted Partners
            </h3>

            {/* LOGO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">

              <Image
                src=""
                alt="Tata AIA"
                width={160}
                height={80}
                className="mx-auto object-contain"
              />

              <Image
                src=""
                alt="PolicyBazaar"
                width={160}
                height={80}
                className="mx-auto object-contain"
              />

              <Image
                src=""
                alt="Angel One"
                width={160}
                height={80}
                className="mx-auto object-contain"
              />

              <Image
                src=""
                alt="IIFL Finance"
                width={160}
                height={80}
                className="mx-auto object-contain"
              />

            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-14">
            <a
              href="/contact"
              className="px-10 py-3 bg-white text-[#1C2A7D] font-semibold text-lg border border-white rounded-xl hover:bg-[#E8D534] hover:text-black transition-all duration-300 shadow-md"
            >
              📩 Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* ===========================
          OUR SERVICES (BROCHURE STYLE)
      =========================== */}
      <section className="py-20 bg-[#F9FAFF]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C2A7D]">
            Our Services
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
            From risk assessment to claims support — Vestigo delivers end-to-end
            insurance protection for businesses and corporates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

            {/* SERVICE CARD */}
            <ServiceCard 
              icon={<FaShieldAlt />}
              title="Risk Management"
              desc="Identifying, evaluating, and minimizing business risks across operations."
            />

            <ServiceCard 
              icon={<FaBook />}
              title="Insurance Awareness Program"
              desc="Training programs designed to educate teams on insurance compliance & benefits."
            />

            <ServiceCard 
              icon={<FaChartBar />}
              title="Risk Matrix Program"
              desc="Analysis & mapping of organizational risks using advanced risk-matrix tools."
            />

            <ServiceCard 
              icon={<FaFolder />}
              title="Comprehensive Insurance Program"
              desc="Complete insurance portfolio planning for organizations of any scale."
            />

            <ServiceCard 
              icon={<FaHandshake />}
              title="Claim Consultancy"
              desc="Dedicated assistance for documentation, filing, and negotiation of claims."
            />

            <ServiceCard 
              icon={<FaStethoscope />}
              title="Health Talk With Experts"
              desc="Corporate wellness & advisory sessions from industry specialists."
            />
          </div>
        </div>
      </section>

      {/* ===========================
          OUR EXPERTISE ON
      =========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C2A7D]">
            Our Expertise On
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
            We bring deep specialization across industry sectors & insurance categories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            <ExpertiseItem text="Property & Casualty" />
            <ExpertiseItem text="Marine Cargo & Hull" />
            <ExpertiseItem text="Employee Benefits" />
            <ExpertiseItem text="Liability & Specialty Lines" />
            <ExpertiseItem text="Infrastructure & Turnkey Projects" />
            <ExpertiseItem text="Surety Bonds & Credit Insurance" />
            <></>
            <ExpertiseItem text="Industry-Specific Risk Solutions" />

          </div>
        </div>
      </section>

      {/* ===========================
            WHY VESTIGO
      =========================== */}
      <section className="py-20 bg-[#F9FAFF]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Yellow Heading */}
          <div className="inline-block bg-[#E8D534] px-6 py-2 rounded-full mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C2A7D]">
              Why Vestigo?
            </h2>
          </div>

          <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mx-auto mb-10">
            Vestigo blends expertise, technology, and personalized advisory to deliver
            comprehensive insurance solutions built specifically for India’s evolving
            business landscape.
          </p>

          {/* BULLET POINT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            <WhyItem text="Personalized Service – Tailored solutions for every client." />
            <WhyItem text="Comprehensive Risk Support – Beyond policies, we are providing proactive risk management." />
            <WhyItem text="Innovative Solutions – Adapting to emerging risks with modern insurance strategies." />
            <WhyItem text="Unmatched Expertise – Decades of industry knowledge." />

          </div>

          {/* Center last bullet */}
          <div className="mt-8 flex justify-center">
            <WhyItem text="Proven Track Record – Trusted by businesses in India." />
          </div>

        </div>
      </section>

    </div>
  );
}

/* ----- ServiceCard Component (Same Page) ----- */
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      <div className="w-16 h-16 bg-[#E8D534] rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-[#1C2A7D]">
        <span className="text-[#1C2A7D] text-3xl">
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-[#1C2A7D] text-center">{title}</h3>
      <p className="text-gray-700 text-sm text-center mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ----- ExpertiseItem Component ----- */
function ExpertiseItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-[#E8D534] rounded-full flex items-center justify-center text-[#1C2A7D] font-bold">
        ✓
      </div>
      <p className="text-gray-700 text-sm mt-1">{text}</p>
    </div>
  );
}

/* ----- WhyItem Component ----- */
function WhyItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-[#E8D534] rounded-full flex items-center justify-center text-[#1C2A7D] font-bold mt-1">
        ✓
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{text}</p>
    </div>
  );
}

