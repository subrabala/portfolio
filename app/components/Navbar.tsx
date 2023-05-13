import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#1C1C1C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <Link
              href="/"
              className="flex items-center px-4 text-white hover:bg-black"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="flex items-center px-4 text-white hover:bg-black"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="flex items-center px-4 text-white hover:bg-black"
            >
              PROJECTS
            </Link>
            <Link
              href="/projects"
              className="flex items-center px-4 text-white hover:bg-black"
            >
              WORK
            </Link>
            <Link
              href="/contact"
              className="flex items-center px-4 text-white hover:bg-black"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
