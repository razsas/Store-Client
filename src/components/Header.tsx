import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex justify-start h-16 px-4 items-center">
        <Link
          href="/"
          className="flex-shrink-0 flex items-center cursor-pointer"
        >
          <span className="text-3xl font-bold text-gray-800">Store App</span>
        </Link>
      </div>
    </nav>
  );
}
