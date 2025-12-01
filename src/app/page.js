import Image from "next/image";

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
          src="/partners/tata.png"
          alt="Tata AIA"
          width={160}
          height={80}
          className="mx-auto object-contain"
        />

        <Image
          src="/partners/policybazaar.png"
          alt="PolicyBazaar"
          width={160}
          height={80}
          className="mx-auto object-contain"
        />

        <Image
          src="/partners/angelone.png"
          alt="Angel One"
          width={160}
          height={80}
          className="mx-auto object-contain"
        />

        <Image
          src="/partners/iifl.png"
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


    </div>
  );
}
