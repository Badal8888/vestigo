export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1C2A7D]">
        Welcome to Vestigo Insurance
      </h1>

      <p className="mt-4 text-gray-700 text-lg">
        Professional Insurance Advisory for Businesses, Corporates & Industries.
      </p>

      <div className="mt-10 space-x-4">
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
  );
}
