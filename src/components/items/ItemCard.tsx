"use client";

import Link from "next/link";
import { Item } from "../../types";

export default function ItemCard({ item }: { item: Item }) {
  const labelClasses =
    "font-semibold text-gray-500 text-[10px] uppercase tracking-wider";
  const defaultImage = `https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80`;

  return (
    <Link
      href={`/${item.id}`}
      className="group block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden max-w-[700px] mx-auto"
    >
      {/* Product Image Section */}
      <div className="relative aspect-square w-full bg-gray-50 p-6 flex items-center justify-center overflow-hidden border-b border-gray-100">
        <img
          src={defaultImage}
          alt={item.name}
          className="object-contain max-h-full max-w-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-blue-700 shadow-sm border border-blue-100 uppercase">
            {item.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h5 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors mb-1">
          {item.name}
        </h5>

        <div className="space-y-1 mb-4">
          <p className="text-sm text-gray-600 capitalize">
            <span className={labelClasses}>Seller:</span> {item.seller}
          </p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-xl font-extrabold text-blue-600">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
