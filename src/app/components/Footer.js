export default function Footer() {
  return (
    <footer className="bg-vestigoPurple text-white text-center py-6">
      <p className="font-semibold tracking-wide">
        © {new Date().getFullYear()} Vestigo Insurance Advisors
      </p>
      <p className="text-sm opacity-75 mt-1">
        Be Assured and Insured
      </p>
    </footer>
  );
}
