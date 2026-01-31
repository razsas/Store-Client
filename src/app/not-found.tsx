import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-6xl font-extrabold text-blue-700 mb-4">404</h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
