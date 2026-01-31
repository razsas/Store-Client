import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="">
        <div className="flex justify-start h-16 px-4">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-gray-800">
                Store App
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
