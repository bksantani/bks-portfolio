export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 bg-[#0B1324] text-center border-t border-[#1f2a40]">
      <p className="opacity-70 text-sm">
        © {new Date().getFullYear()} Bharat Santani — All Rights Reserved.
      </p>

      <p className="mt-2 text-sm">
        linkedin.com/in/bharat-kumar-santani
      </p>
    </footer>
  );
}